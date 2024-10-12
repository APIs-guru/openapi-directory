# GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources

Batch compute resources associated with the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executors_count** | **int** | Optional. Total number of job executors. Executor Count should be between 2 and 100. Default&#x3D;2 | [optional] 
**max_executors_count** | **int** | Optional. Max configurable executors. If max_executors_count &gt; executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default&#x3D;1000 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_infrastructure_spec_batch_compute_resources import GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources from a JSON string
google_cloud_dataplex_v1_task_infrastructure_spec_batch_compute_resources_instance = GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_infrastructure_spec_batch_compute_resources_dict = google_cloud_dataplex_v1_task_infrastructure_spec_batch_compute_resources_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources from a dict
google_cloud_dataplex_v1_task_infrastructure_spec_batch_compute_resources_from_dict = GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources.from_dict(google_cloud_dataplex_v1_task_infrastructure_spec_batch_compute_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


