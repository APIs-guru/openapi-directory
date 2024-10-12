# SearchAutoCompleteFilter

Details of how to filter and list search auto complete information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_collapsed_fields** | **bool** | Include collapsed fields for fields that have non-unique names. | [optional] [default to False]
**project_ids** | **List[int]** | List of project IDs used to filter the visible field details returned. | [optional] 

## Example

```python
from openapi_client.models.search_auto_complete_filter import SearchAutoCompleteFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAutoCompleteFilter from a JSON string
search_auto_complete_filter_instance = SearchAutoCompleteFilter.from_json(json)
# print the JSON string representation of the object
print(SearchAutoCompleteFilter.to_json())

# convert the object into a dict
search_auto_complete_filter_dict = search_auto_complete_filter_instance.to_dict()
# create an instance of SearchAutoCompleteFilter from a dict
search_auto_complete_filter_from_dict = SearchAutoCompleteFilter.from_dict(search_auto_complete_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


