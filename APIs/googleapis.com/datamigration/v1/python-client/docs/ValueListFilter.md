# ValueListFilter

A list of values to filter by in ConditionalColumnSetValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_case** | **bool** | Required. Whether to ignore case when filtering by values. Defaults to false | [optional] 
**value_present_list** | **str** | Required. Indicates whether the filter matches rows with values that are present in the list or those with values not present in it. | [optional] 
**values** | **List[str]** | Required. The list to be used to filter by | [optional] 

## Example

```python
from openapi_client.models.value_list_filter import ValueListFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ValueListFilter from a JSON string
value_list_filter_instance = ValueListFilter.from_json(json)
# print the JSON string representation of the object
print(ValueListFilter.to_json())

# convert the object into a dict
value_list_filter_dict = value_list_filter_instance.to_dict()
# create an instance of ValueListFilter from a dict
value_list_filter_from_dict = ValueListFilter.from_dict(value_list_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


