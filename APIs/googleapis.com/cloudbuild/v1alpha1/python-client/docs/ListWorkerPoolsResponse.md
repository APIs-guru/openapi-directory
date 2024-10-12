# ListWorkerPoolsResponse

Response containing existing `WorkerPools`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worker_pools** | [**List[WorkerPool]**](WorkerPool.md) | &#x60;WorkerPools&#x60; for the project. | [optional] 

## Example

```python
from openapi_client.models.list_worker_pools_response import ListWorkerPoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkerPoolsResponse from a JSON string
list_worker_pools_response_instance = ListWorkerPoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkerPoolsResponse.to_json())

# convert the object into a dict
list_worker_pools_response_dict = list_worker_pools_response_instance.to_dict()
# create an instance of ListWorkerPoolsResponse from a dict
list_worker_pools_response_from_dict = ListWorkerPoolsResponse.from_dict(list_worker_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


