# GoogleCloudRunV2Revision

A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. | [optional] [readonly] 
**conditions** | [**List[GoogleCloudRunV2Condition]**](GoogleCloudRunV2Condition.md) | Output only. The Condition of this Revision, containing its readiness status, and detailed error information in case it did not reach a serving state. | [optional] [readonly] 
**containers** | [**List[GoogleCloudRunV2Container]**](GoogleCloudRunV2Container.md) | Holds the single container that defines the unit of execution for this Revision. | [optional] 
**create_time** | **str** | Output only. The creation time. | [optional] [readonly] 
**delete_time** | **str** | Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. | [optional] [readonly] 
**encryption_key** | **str** | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek | [optional] 
**encryption_key_revocation_action** | **str** | The action to take if the encryption key is revoked. | [optional] 
**encryption_key_shutdown_duration** | **str** | If encryption_key_revocation_action is SHUTDOWN, the duration before shutting down all instances. The minimum increment is 1 hour. | [optional] 
**etag** | **str** | Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. | [optional] [readonly] 
**execution_environment** | **str** | The execution environment being used to host this Revision. | [optional] 
**expire_time** | **str** | Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. | [optional] [readonly] 
**generation** | **str** | Output only. A number that monotonically increases every time the user modifies the desired state. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google&#39;s billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. | [optional] [readonly] 
**launch_stage** | **str** | The least stable launch stage needed to create this resource, as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports &#x60;ALPHA&#x60;, &#x60;BETA&#x60;, and &#x60;GA&#x60;. Note that this value might not be what was used as input. For example, if ALPHA was provided as input in the parent resource, but only BETA and GA-level features are were, this field will be BETA. | [optional] 
**log_uri** | **str** | Output only. The Google Console URI to obtain logs for the Revision. | [optional] [readonly] 
**max_instance_request_concurrency** | **int** | Sets the maximum number of requests that each serving instance can receive. | [optional] 
**name** | **str** | Output only. The unique name of this Revision. | [optional] [readonly] 
**observed_generation** | **str** | Output only. The generation of this Revision currently serving traffic. See comments in &#x60;reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**reconciling** | **bool** | Output only. Indicates whether the resource&#39;s reconciliation is still in progress. See comments in &#x60;Service.reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**scaling** | [**GoogleCloudRunV2RevisionScaling**](GoogleCloudRunV2RevisionScaling.md) |  | [optional] 
**scaling_status** | [**GoogleCloudRunV2RevisionScalingStatus**](GoogleCloudRunV2RevisionScalingStatus.md) |  | [optional] 
**service** | **str** | Output only. The name of the parent service. | [optional] [readonly] 
**service_account** | **str** | Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. | [optional] 
**session_affinity** | **bool** | Enable session affinity. | [optional] 
**timeout** | **str** | Max allowed time for an instance to respond to a request. | [optional] 
**uid** | **str** | Output only. Server assigned unique identifier for the Revision. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 
**volumes** | [**List[GoogleCloudRunV2Volume]**](GoogleCloudRunV2Volume.md) | A list of Volumes to make available to containers. | [optional] 
**vpc_access** | [**GoogleCloudRunV2VpcAccess**](GoogleCloudRunV2VpcAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_revision import GoogleCloudRunV2Revision

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Revision from a JSON string
google_cloud_run_v2_revision_instance = GoogleCloudRunV2Revision.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Revision.to_json())

# convert the object into a dict
google_cloud_run_v2_revision_dict = google_cloud_run_v2_revision_instance.to_dict()
# create an instance of GoogleCloudRunV2Revision from a dict
google_cloud_run_v2_revision_from_dict = GoogleCloudRunV2Revision.from_dict(google_cloud_run_v2_revision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


