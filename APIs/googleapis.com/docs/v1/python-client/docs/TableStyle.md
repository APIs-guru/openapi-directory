# TableStyle

Styles that apply to a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_column_properties** | [**List[TableColumnProperties]**](TableColumnProperties.md) | The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row&#39;s table_row_style. | [optional] 

## Example

```python
from openapi_client.models.table_style import TableStyle

# TODO update the JSON string below
json = "{}"
# create an instance of TableStyle from a JSON string
table_style_instance = TableStyle.from_json(json)
# print the JSON string representation of the object
print(TableStyle.to_json())

# convert the object into a dict
table_style_dict = table_style_instance.to_dict()
# create an instance of TableStyle from a dict
table_style_from_dict = TableStyle.from_dict(table_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


