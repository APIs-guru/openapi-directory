# StandardSqlTableType

A table type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[StandardSqlField]**](StandardSqlField.md) | The columns in this table type | [optional] 

## Example

```python
from openapi_client.models.standard_sql_table_type import StandardSqlTableType

# TODO update the JSON string below
json = "{}"
# create an instance of StandardSqlTableType from a JSON string
standard_sql_table_type_instance = StandardSqlTableType.from_json(json)
# print the JSON string representation of the object
print(StandardSqlTableType.to_json())

# convert the object into a dict
standard_sql_table_type_dict = standard_sql_table_type_instance.to_dict()
# create an instance of StandardSqlTableType from a dict
standard_sql_table_type_from_dict = StandardSqlTableType.from_dict(standard_sql_table_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


