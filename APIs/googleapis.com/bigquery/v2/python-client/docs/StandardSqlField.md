# StandardSqlField

A field or a column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. The name of this field. Can be absent for struct fields. | [optional] 
**type** | [**StandardSqlDataType**](StandardSqlDataType.md) |  | [optional] 

## Example

```python
from openapi_client.models.standard_sql_field import StandardSqlField

# TODO update the JSON string below
json = "{}"
# create an instance of StandardSqlField from a JSON string
standard_sql_field_instance = StandardSqlField.from_json(json)
# print the JSON string representation of the object
print(StandardSqlField.to_json())

# convert the object into a dict
standard_sql_field_dict = standard_sql_field_instance.to_dict()
# create an instance of StandardSqlField from a dict
standard_sql_field_from_dict = StandardSqlField.from_dict(standard_sql_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


