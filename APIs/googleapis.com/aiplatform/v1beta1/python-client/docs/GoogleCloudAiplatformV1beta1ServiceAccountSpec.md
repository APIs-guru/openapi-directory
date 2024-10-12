# GoogleCloudAiplatformV1beta1ServiceAccountSpec

Configuration for the use of custom service account to run the workloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_custom_service_account** | **bool** | Required. If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource. Otherwise, uses the [Vertex AI Custom Code Service Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents). | [optional] 
**service_account** | **str** | Optional. Default service account that this PersistentResource&#39;s workloads run as. The workloads include: * Any runtime specified via &#x60;ResourceRuntimeSpec&#x60; on creation time, for example, Ray. * Jobs submitted to PersistentResource, if no other service account specified in the job specs. Only works when custom service account is enabled and users have the &#x60;iam.serviceAccounts.actAs&#x60; permission on this service account. Required if any containers are specified in &#x60;ResourceRuntimeSpec&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_service_account_spec import GoogleCloudAiplatformV1beta1ServiceAccountSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ServiceAccountSpec from a JSON string
google_cloud_aiplatform_v1beta1_service_account_spec_instance = GoogleCloudAiplatformV1beta1ServiceAccountSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ServiceAccountSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_service_account_spec_dict = google_cloud_aiplatform_v1beta1_service_account_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ServiceAccountSpec from a dict
google_cloud_aiplatform_v1beta1_service_account_spec_from_dict = GoogleCloudAiplatformV1beta1ServiceAccountSpec.from_dict(google_cloud_aiplatform_v1beta1_service_account_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


