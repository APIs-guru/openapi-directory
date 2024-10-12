# TableDisplayOptions

Table display options that can be reused.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shown_columns** | **List[str]** | Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings | [optional] 

## Example

```python
from openapi_client.models.table_display_options import TableDisplayOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TableDisplayOptions from a JSON string
table_display_options_instance = TableDisplayOptions.from_json(json)
# print the JSON string representation of the object
print(TableDisplayOptions.to_json())

# convert the object into a dict
table_display_options_dict = table_display_options_instance.to_dict()
# create an instance of TableDisplayOptions from a dict
table_display_options_from_dict = TableDisplayOptions.from_dict(table_display_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


