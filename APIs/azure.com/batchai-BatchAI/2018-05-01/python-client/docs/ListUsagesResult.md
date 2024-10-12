# ListUsagesResult

The List Usages operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. | [optional] [readonly] 
**value** | [**List[Usage]**](Usage.md) | The list of compute resource usages. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_usages_result import ListUsagesResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListUsagesResult from a JSON string
list_usages_result_instance = ListUsagesResult.from_json(json)
# print the JSON string representation of the object
print(ListUsagesResult.to_json())

# convert the object into a dict
list_usages_result_dict = list_usages_result_instance.to_dict()
# create an instance of ListUsagesResult from a dict
list_usages_result_from_dict = ListUsagesResult.from_dict(list_usages_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


