# JsonSchema

JsonSchema representation of schema metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_details** | **Dict[str, object]** | Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema | [optional] 
**description** | **str** | A description of this schema. | [optional] 
**enum** | **List[object]** | Possible values for an enumeration. This works in conjunction with &#x60;type&#x60; to represent types with a fixed set of legal values | [optional] 
**format** | **str** | Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format | [optional] 
**items** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**jdbc_type** | **str** | JDBC datatype of the field. | [optional] 
**properties** | [**Dict[str, JsonSchema]**](JsonSchema.md) | The child schemas, applicable only if this is of type &#x60;object&#x60;. The key is the name of the property and the value is the json schema that describes that property | [optional] 
**required** | **List[str]** | Whether this property is required. | [optional] 
**type** | **List[str]** | JSON Schema Validation: A Vocabulary for Structural Validation of JSON | [optional] 

## Example

```python
from openapi_client.models.json_schema import JsonSchema

# TODO update the JSON string below
json = "{}"
# create an instance of JsonSchema from a JSON string
json_schema_instance = JsonSchema.from_json(json)
# print the JSON string representation of the object
print(JsonSchema.to_json())

# convert the object into a dict
json_schema_dict = json_schema_instance.to_dict()
# create an instance of JsonSchema from a dict
json_schema_from_dict = JsonSchema.from_dict(json_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


