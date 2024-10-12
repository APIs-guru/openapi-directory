# TableColumnProperties

The properties of a column in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**width** | [**Dimension**](Dimension.md) |  | [optional] 
**width_type** | **str** | The width type of the column. | [optional] 

## Example

```python
from openapi_client.models.table_column_properties import TableColumnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableColumnProperties from a JSON string
table_column_properties_instance = TableColumnProperties.from_json(json)
# print the JSON string representation of the object
print(TableColumnProperties.to_json())

# convert the object into a dict
table_column_properties_dict = table_column_properties_instance.to_dict()
# create an instance of TableColumnProperties from a dict
table_column_properties_from_dict = TableColumnProperties.from_dict(table_column_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


