# StandardSqlStructType

The representation of a SQL STRUCT type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[StandardSqlField]**](StandardSqlField.md) | Fields within the struct. | [optional] 

## Example

```python
from openapi_client.models.standard_sql_struct_type import StandardSqlStructType

# TODO update the JSON string below
json = "{}"
# create an instance of StandardSqlStructType from a JSON string
standard_sql_struct_type_instance = StandardSqlStructType.from_json(json)
# print the JSON string representation of the object
print(StandardSqlStructType.to_json())

# convert the object into a dict
standard_sql_struct_type_dict = standard_sql_struct_type_instance.to_dict()
# create an instance of StandardSqlStructType from a dict
standard_sql_struct_type_from_dict = StandardSqlStructType.from_dict(standard_sql_struct_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


