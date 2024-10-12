# SetTablePrimaryKey

Options to configure rule type SetTablePrimaryKey. The rule is used to specify the columns and name to configure/alter the primary key of a table. The rule filter field can refer to one entity. The rule scope can be one of: Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | Optional. Name for the primary key | [optional] 
**primary_key_columns** | **List[str]** | Required. List of column names for the primary key | [optional] 

## Example

```python
from openapi_client.models.set_table_primary_key import SetTablePrimaryKey

# TODO update the JSON string below
json = "{}"
# create an instance of SetTablePrimaryKey from a JSON string
set_table_primary_key_instance = SetTablePrimaryKey.from_json(json)
# print the JSON string representation of the object
print(SetTablePrimaryKey.to_json())

# convert the object into a dict
set_table_primary_key_dict = set_table_primary_key_instance.to_dict()
# create an instance of SetTablePrimaryKey from a dict
set_table_primary_key_from_dict = SetTablePrimaryKey.from_dict(set_table_primary_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


