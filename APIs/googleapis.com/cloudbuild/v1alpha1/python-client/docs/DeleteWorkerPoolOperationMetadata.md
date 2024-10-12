# DeleteWorkerPoolOperationMetadata

Metadata for the `DeleteWorkerPool` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**worker_pool** | **str** | The resource name of the &#x60;WorkerPool&#x60; being deleted. Format: &#x60;projects/{project}/locations/{location}/workerPools/{worker_pool}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.delete_worker_pool_operation_metadata import DeleteWorkerPoolOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteWorkerPoolOperationMetadata from a JSON string
delete_worker_pool_operation_metadata_instance = DeleteWorkerPoolOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(DeleteWorkerPoolOperationMetadata.to_json())

# convert the object into a dict
delete_worker_pool_operation_metadata_dict = delete_worker_pool_operation_metadata_instance.to_dict()
# create an instance of DeleteWorkerPoolOperationMetadata from a dict
delete_worker_pool_operation_metadata_from_dict = DeleteWorkerPoolOperationMetadata.from_dict(delete_worker_pool_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


