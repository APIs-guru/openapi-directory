# JsonInputSchemaMapping

This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JsonInputSchemaMappingProperties**](JsonInputSchemaMappingProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.json_input_schema_mapping import JsonInputSchemaMapping

# TODO update the JSON string below
json = "{}"
# create an instance of JsonInputSchemaMapping from a JSON string
json_input_schema_mapping_instance = JsonInputSchemaMapping.from_json(json)
# print the JSON string representation of the object
print(JsonInputSchemaMapping.to_json())

# convert the object into a dict
json_input_schema_mapping_dict = json_input_schema_mapping_instance.to_dict()
# create an instance of JsonInputSchemaMapping from a dict
json_input_schema_mapping_from_dict = JsonInputSchemaMapping.from_dict(json_input_schema_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


