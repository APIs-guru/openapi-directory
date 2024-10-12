# FilterTableColumns

Options to configure rule type FilterTableColumns. The rule is used to filter the list of columns to include or exclude from a table. The rule filter field can refer to one entity. The rule scope can be: Table Only one of the two lists can be specified for the rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_columns** | **List[str]** | Optional. List of columns to be excluded for a particular table. | [optional] 
**include_columns** | **List[str]** | Optional. List of columns to be included for a particular table. | [optional] 

## Example

```python
from openapi_client.models.filter_table_columns import FilterTableColumns

# TODO update the JSON string below
json = "{}"
# create an instance of FilterTableColumns from a JSON string
filter_table_columns_instance = FilterTableColumns.from_json(json)
# print the JSON string representation of the object
print(FilterTableColumns.to_json())

# convert the object into a dict
filter_table_columns_dict = filter_table_columns_instance.to_dict()
# create an instance of FilterTableColumns from a dict
filter_table_columns_from_dict = FilterTableColumns.from_dict(filter_table_columns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


