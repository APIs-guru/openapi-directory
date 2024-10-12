# WorkerPoolCollection

Collection of worker pools

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[WorkerPool]**](WorkerPool.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.worker_pool_collection import WorkerPoolCollection

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerPoolCollection from a JSON string
worker_pool_collection_instance = WorkerPoolCollection.from_json(json)
# print the JSON string representation of the object
print(WorkerPoolCollection.to_json())

# convert the object into a dict
worker_pool_collection_dict = worker_pool_collection_instance.to_dict()
# create an instance of WorkerPoolCollection from a dict
worker_pool_collection_from_dict = WorkerPoolCollection.from_dict(worker_pool_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


