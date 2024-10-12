# ListQueryKeysResult

Response containing the query API keys for a given Azure Search service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[QueryKey]**](QueryKey.md) | The query keys for the Azure Search service. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_query_keys_result import ListQueryKeysResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListQueryKeysResult from a JSON string
list_query_keys_result_instance = ListQueryKeysResult.from_json(json)
# print the JSON string representation of the object
print(ListQueryKeysResult.to_json())

# convert the object into a dict
list_query_keys_result_dict = list_query_keys_result_instance.to_dict()
# create an instance of ListQueryKeysResult from a dict
list_query_keys_result_from_dict = ListQueryKeysResult.from_dict(list_query_keys_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


