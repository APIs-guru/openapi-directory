# GoogleCloudAiplatformV1BatchDedicatedResources

A description of resources that are used for performing batch operations, are dedicated to a Model, and need manual configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_spec** | [**GoogleCloudAiplatformV1MachineSpec**](GoogleCloudAiplatformV1MachineSpec.md) |  | [optional] 
**max_replica_count** | **int** | Immutable. The maximum number of machine replicas the batch operation may be scaled to. The default value is 10. | [optional] 
**starting_replica_count** | **int** | Immutable. The number of machine replicas used at the start of the batch operation. If not set, Vertex AI decides starting number, not greater than max_replica_count | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_dedicated_resources import GoogleCloudAiplatformV1BatchDedicatedResources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchDedicatedResources from a JSON string
google_cloud_aiplatform_v1_batch_dedicated_resources_instance = GoogleCloudAiplatformV1BatchDedicatedResources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchDedicatedResources.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_dedicated_resources_dict = google_cloud_aiplatform_v1_batch_dedicated_resources_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchDedicatedResources from a dict
google_cloud_aiplatform_v1_batch_dedicated_resources_from_dict = GoogleCloudAiplatformV1BatchDedicatedResources.from_dict(google_cloud_aiplatform_v1_batch_dedicated_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


