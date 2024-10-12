# GoogleCloudAiplatformV1beta1ResourceRuntimeSpec

Configuration for the runtime on a PersistentResource instance, including but not limited to: * Service accounts used to run the workloads. * Whether to make it a dedicated Ray Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ray_spec** | [**GoogleCloudAiplatformV1beta1RaySpec**](GoogleCloudAiplatformV1beta1RaySpec.md) |  | [optional] 
**service_account_spec** | [**GoogleCloudAiplatformV1beta1ServiceAccountSpec**](GoogleCloudAiplatformV1beta1ServiceAccountSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_resource_runtime_spec import GoogleCloudAiplatformV1beta1ResourceRuntimeSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ResourceRuntimeSpec from a JSON string
google_cloud_aiplatform_v1beta1_resource_runtime_spec_instance = GoogleCloudAiplatformV1beta1ResourceRuntimeSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ResourceRuntimeSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_resource_runtime_spec_dict = google_cloud_aiplatform_v1beta1_resource_runtime_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ResourceRuntimeSpec from a dict
google_cloud_aiplatform_v1beta1_resource_runtime_spec_from_dict = GoogleCloudAiplatformV1beta1ResourceRuntimeSpec.from_dict(google_cloud_aiplatform_v1beta1_resource_runtime_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


