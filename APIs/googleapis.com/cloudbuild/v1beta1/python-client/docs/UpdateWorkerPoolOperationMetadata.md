# UpdateWorkerPoolOperationMetadata

Metadata for the `UpdateWorkerPool` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**worker_pool** | **str** | The resource name of the &#x60;WorkerPool&#x60; being updated. Format: &#x60;projects/{project}/locations/{location}/workerPools/{worker_pool}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.update_worker_pool_operation_metadata import UpdateWorkerPoolOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWorkerPoolOperationMetadata from a JSON string
update_worker_pool_operation_metadata_instance = UpdateWorkerPoolOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateWorkerPoolOperationMetadata.to_json())

# convert the object into a dict
update_worker_pool_operation_metadata_dict = update_worker_pool_operation_metadata_instance.to_dict()
# create an instance of UpdateWorkerPoolOperationMetadata from a dict
update_worker_pool_operation_metadata_from_dict = UpdateWorkerPoolOperationMetadata.from_dict(update_worker_pool_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


