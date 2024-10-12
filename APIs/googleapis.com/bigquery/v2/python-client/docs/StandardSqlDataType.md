# StandardSqlDataType

The data type of a variable such as a function argument. Examples include: * INT64: `{\"typeKind\": \"INT64\"}` * ARRAY: { \"typeKind\": \"ARRAY\", \"arrayElementType\": {\"typeKind\": \"STRING\"} } * STRUCT>: { \"typeKind\": \"STRUCT\", \"structType\": { \"fields\": [ { \"name\": \"x\", \"type\": {\"typeKind\": \"STRING\"} }, { \"name\": \"y\", \"type\": { \"typeKind\": \"ARRAY\", \"arrayElementType\": {\"typeKind\": \"DATE\"} } } ] } }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_element_type** | [**StandardSqlDataType**](StandardSqlDataType.md) |  | [optional] 
**range_element_type** | [**StandardSqlDataType**](StandardSqlDataType.md) |  | [optional] 
**struct_type** | [**StandardSqlStructType**](StandardSqlStructType.md) |  | [optional] 
**type_kind** | **str** | Required. The top level type of this field. Can be any GoogleSQL data type (e.g., \&quot;INT64\&quot;, \&quot;DATE\&quot;, \&quot;ARRAY\&quot;). | [optional] 

## Example

```python
from openapi_client.models.standard_sql_data_type import StandardSqlDataType

# TODO update the JSON string below
json = "{}"
# create an instance of StandardSqlDataType from a JSON string
standard_sql_data_type_instance = StandardSqlDataType.from_json(json)
# print the JSON string representation of the object
print(StandardSqlDataType.to_json())

# convert the object into a dict
standard_sql_data_type_dict = standard_sql_data_type_instance.to_dict()
# create an instance of StandardSqlDataType from a dict
standard_sql_data_type_from_dict = StandardSqlDataType.from_dict(standard_sql_data_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


