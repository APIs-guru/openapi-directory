# ConvertRowIdToColumn

Options to configure rule type ConvertROWIDToColumn. The rule is used to add column rowid to destination tables based on an Oracle rowid function/property. The rule filter field can refer to one or more entities. The rule scope can be one of: Table. This rule requires additional filter to be specified beyond the basic rule filter field, which is whether or not to work on tables which already have a primary key defined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**only_if_no_primary_key** | **bool** | Required. Only work on tables without primary key defined | [optional] 

## Example

```python
from openapi_client.models.convert_row_id_to_column import ConvertRowIdToColumn

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertRowIdToColumn from a JSON string
convert_row_id_to_column_instance = ConvertRowIdToColumn.from_json(json)
# print the JSON string representation of the object
print(ConvertRowIdToColumn.to_json())

# convert the object into a dict
convert_row_id_to_column_dict = convert_row_id_to_column_instance.to_dict()
# create an instance of ConvertRowIdToColumn from a dict
convert_row_id_to_column_from_dict = ConvertRowIdToColumn.from_dict(convert_row_id_to_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


