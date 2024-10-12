# FilterSearchAndReplaceDetails

Details for the filter of the type SEARCH_AND_REPLACE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Determines if the filter is case sensitive. | [optional] 
**var_field** | **str** | Field to use in the filter. | [optional] 
**field_index** | **int** | The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. | [optional] 
**replace_string** | **str** | Term to replace the search term with. | [optional] 
**search_string** | **str** | Term to search. | [optional] 

## Example

```python
from openapi_client.models.filter_search_and_replace_details import FilterSearchAndReplaceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FilterSearchAndReplaceDetails from a JSON string
filter_search_and_replace_details_instance = FilterSearchAndReplaceDetails.from_json(json)
# print the JSON string representation of the object
print(FilterSearchAndReplaceDetails.to_json())

# convert the object into a dict
filter_search_and_replace_details_dict = filter_search_and_replace_details_instance.to_dict()
# create an instance of FilterSearchAndReplaceDetails from a dict
filter_search_and_replace_details_from_dict = FilterSearchAndReplaceDetails.from_dict(filter_search_and_replace_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


