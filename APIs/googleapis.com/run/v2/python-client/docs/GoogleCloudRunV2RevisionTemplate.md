# GoogleCloudRunV2RevisionTemplate

RevisionTemplate describes the data a revision should have when created from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with &#x60;run.googleapis.com&#x60;, &#x60;cloud.googleapis.com&#x60;, &#x60;serving.knative.dev&#x60;, or &#x60;autoscaling.knative.dev&#x60; namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 RevisionTemplate. This field follows Kubernetes annotations&#39; namespacing, limits, and rules. | [optional] 
**containers** | [**List[GoogleCloudRunV2Container]**](GoogleCloudRunV2Container.md) | Holds the single container that defines the unit of execution for this Revision. | [optional] 
**encryption_key** | **str** | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek | [optional] 
**execution_environment** | **str** | The sandbox environment to host this Revision. | [optional] 
**health_check_disabled** | **bool** | Optional. Disables health checking containers during deployment. | [optional] 
**labels** | **Dict[str, str]** | Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google&#39;s billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with &#x60;run.googleapis.com&#x60;, &#x60;cloud.googleapis.com&#x60;, &#x60;serving.knative.dev&#x60;, or &#x60;autoscaling.knative.dev&#x60; namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 RevisionTemplate. | [optional] 
**max_instance_request_concurrency** | **int** | Sets the maximum number of requests that each serving instance can receive. | [optional] 
**revision** | **str** | The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name. | [optional] 
**scaling** | [**GoogleCloudRunV2RevisionScaling**](GoogleCloudRunV2RevisionScaling.md) |  | [optional] 
**service_account** | **str** | Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project&#39;s default service account. | [optional] 
**session_affinity** | **bool** | Optional. Enable session affinity. | [optional] 
**timeout** | **str** | Max allowed time for an instance to respond to a request. | [optional] 
**volumes** | [**List[GoogleCloudRunV2Volume]**](GoogleCloudRunV2Volume.md) | A list of Volumes to make available to containers. | [optional] 
**vpc_access** | [**GoogleCloudRunV2VpcAccess**](GoogleCloudRunV2VpcAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_revision_template import GoogleCloudRunV2RevisionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2RevisionTemplate from a JSON string
google_cloud_run_v2_revision_template_instance = GoogleCloudRunV2RevisionTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2RevisionTemplate.to_json())

# convert the object into a dict
google_cloud_run_v2_revision_template_dict = google_cloud_run_v2_revision_template_instance.to_dict()
# create an instance of GoogleCloudRunV2RevisionTemplate from a dict
google_cloud_run_v2_revision_template_from_dict = GoogleCloudRunV2RevisionTemplate.from_dict(google_cloud_run_v2_revision_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


