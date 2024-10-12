# TableViewPropertiesTableOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fix_first_column** | **bool** | fixFirstColumn indicates whether the first column of the table should be locked | [optional] 
**sort_by** | [**RenamableField**](RenamableField.md) |  | [optional] 
**vertical_time_axis** | **bool** | verticalTimeAxis describes the orientation of the table by indicating whether the time axis will be displayed vertically | [optional] 
**wrapping** | **str** | Wrapping describes the text wrapping style to be used in table views | [optional] 

## Example

```python
from openapi_client.models.table_view_properties_table_options import TableViewPropertiesTableOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TableViewPropertiesTableOptions from a JSON string
table_view_properties_table_options_instance = TableViewPropertiesTableOptions.from_json(json)
# print the JSON string representation of the object
print(TableViewPropertiesTableOptions.to_json())

# convert the object into a dict
table_view_properties_table_options_dict = table_view_properties_table_options_instance.to_dict()
# create an instance of TableViewPropertiesTableOptions from a dict
table_view_properties_table_options_from_dict = TableViewPropertiesTableOptions.from_dict(table_view_properties_table_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


