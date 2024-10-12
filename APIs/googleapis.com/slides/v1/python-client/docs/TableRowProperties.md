# TableRowProperties

Properties of each row in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_row_height** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_row_properties import TableRowProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableRowProperties from a JSON string
table_row_properties_instance = TableRowProperties.from_json(json)
# print the JSON string representation of the object
print(TableRowProperties.to_json())

# convert the object into a dict
table_row_properties_dict = table_row_properties_instance.to_dict()
# create an instance of TableRowProperties from a dict
table_row_properties_from_dict = TableRowProperties.from_dict(table_row_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


