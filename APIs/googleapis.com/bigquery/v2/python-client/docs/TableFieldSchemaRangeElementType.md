# TableFieldSchemaRangeElementType

Represents the type of a field element.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Required. The type of a field element. See TableFieldSchema.type. | [optional] 

## Example

```python
from openapi_client.models.table_field_schema_range_element_type import TableFieldSchemaRangeElementType

# TODO update the JSON string below
json = "{}"
# create an instance of TableFieldSchemaRangeElementType from a JSON string
table_field_schema_range_element_type_instance = TableFieldSchemaRangeElementType.from_json(json)
# print the JSON string representation of the object
print(TableFieldSchemaRangeElementType.to_json())

# convert the object into a dict
table_field_schema_range_element_type_dict = table_field_schema_range_element_type_instance.to_dict()
# create an instance of TableFieldSchemaRangeElementType from a dict
table_field_schema_range_element_type_from_dict = TableFieldSchemaRangeElementType.from_dict(table_field_schema_range_element_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


