# GoogleCloudAiplatformV1beta1ResourcePool

Represents the spec of a group of resources of the same type, for example machine type, disk, and accelerators, in a PersistentResource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_spec** | [**GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec**](GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec.md) |  | [optional] 
**disk_spec** | [**GoogleCloudAiplatformV1beta1DiskSpec**](GoogleCloudAiplatformV1beta1DiskSpec.md) |  | [optional] 
**id** | **str** | Immutable. The unique ID in a PersistentResource for referring to this resource pool. User can specify it if necessary. Otherwise, it&#39;s generated automatically. | [optional] 
**machine_spec** | [**GoogleCloudAiplatformV1beta1MachineSpec**](GoogleCloudAiplatformV1beta1MachineSpec.md) |  | [optional] 
**replica_count** | **str** | Optional. The total number of machines to use for this resource pool. | [optional] 
**used_replica_count** | **str** | Output only. The number of machines currently in use by training jobs for this resource pool. Will replace idle_replica_count. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_resource_pool import GoogleCloudAiplatformV1beta1ResourcePool

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ResourcePool from a JSON string
google_cloud_aiplatform_v1beta1_resource_pool_instance = GoogleCloudAiplatformV1beta1ResourcePool.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ResourcePool.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_resource_pool_dict = google_cloud_aiplatform_v1beta1_resource_pool_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ResourcePool from a dict
google_cloud_aiplatform_v1beta1_resource_pool_from_dict = GoogleCloudAiplatformV1beta1ResourcePool.from_dict(google_cloud_aiplatform_v1beta1_resource_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


