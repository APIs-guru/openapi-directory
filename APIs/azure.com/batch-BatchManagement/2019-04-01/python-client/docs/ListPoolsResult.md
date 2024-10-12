# ListPoolsResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] 
**value** | [**List[Pool]**](Pool.md) | The collection of returned pools. | [optional] 

## Example

```python
from openapi_client.models.list_pools_result import ListPoolsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListPoolsResult from a JSON string
list_pools_result_instance = ListPoolsResult.from_json(json)
# print the JSON string representation of the object
print(ListPoolsResult.to_json())

# convert the object into a dict
list_pools_result_dict = list_pools_result_instance.to_dict()
# create an instance of ListPoolsResult from a dict
list_pools_result_from_dict = ListPoolsResult.from_dict(list_pools_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


