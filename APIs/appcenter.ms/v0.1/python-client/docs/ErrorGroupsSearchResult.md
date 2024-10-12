# ErrorGroupsSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_groups** | [**List[ErrorsGroupList200ResponseErrorGroupsInner]**](ErrorsGroupList200ResponseErrorGroupsInner.md) |  | [optional] 
**has_more_results** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.error_groups_search_result import ErrorGroupsSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupsSearchResult from a JSON string
error_groups_search_result_instance = ErrorGroupsSearchResult.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupsSearchResult.to_json())

# convert the object into a dict
error_groups_search_result_dict = error_groups_search_result_instance.to_dict()
# create an instance of ErrorGroupsSearchResult from a dict
error_groups_search_result_from_dict = ErrorGroupsSearchResult.from_dict(error_groups_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


