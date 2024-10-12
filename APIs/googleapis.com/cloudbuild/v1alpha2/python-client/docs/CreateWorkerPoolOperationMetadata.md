# CreateWorkerPoolOperationMetadata

Metadata for the `CreateWorkerPool` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**worker_pool** | **str** | The resource name of the &#x60;WorkerPool&#x60; to create. Format: &#x60;projects/{project}/locations/{location}/workerPools/{worker_pool}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.create_worker_pool_operation_metadata import CreateWorkerPoolOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkerPoolOperationMetadata from a JSON string
create_worker_pool_operation_metadata_instance = CreateWorkerPoolOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateWorkerPoolOperationMetadata.to_json())

# convert the object into a dict
create_worker_pool_operation_metadata_dict = create_worker_pool_operation_metadata_instance.to_dict()
# create an instance of CreateWorkerPoolOperationMetadata from a dict
create_worker_pool_operation_metadata_from_dict = CreateWorkerPoolOperationMetadata.from_dict(create_worker_pool_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


