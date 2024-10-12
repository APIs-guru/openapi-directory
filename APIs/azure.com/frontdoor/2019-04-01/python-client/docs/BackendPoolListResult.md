# BackendPoolListResult

Result of the request to list Backend Pools. It contains a list of Backend Pools objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of BackendPool objects if there are any. | [optional] 
**value** | [**List[BackendPool]**](BackendPool.md) | List of Backend Pools within a Front Door. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backend_pool_list_result import BackendPoolListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BackendPoolListResult from a JSON string
backend_pool_list_result_instance = BackendPoolListResult.from_json(json)
# print the JSON string representation of the object
print(BackendPoolListResult.to_json())

# convert the object into a dict
backend_pool_list_result_dict = backend_pool_list_result_instance.to_dict()
# create an instance of BackendPoolListResult from a dict
backend_pool_list_result_from_dict = BackendPoolListResult.from_dict(backend_pool_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


