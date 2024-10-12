# InputSchemaMapping

By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_schema_mapping_type** | **str** | Type of the custom mapping | [optional] 

## Example

```python
from openapi_client.models.input_schema_mapping import InputSchemaMapping

# TODO update the JSON string below
json = "{}"
# create an instance of InputSchemaMapping from a JSON string
input_schema_mapping_instance = InputSchemaMapping.from_json(json)
# print the JSON string representation of the object
print(InputSchemaMapping.to_json())

# convert the object into a dict
input_schema_mapping_dict = input_schema_mapping_instance.to_dict()
# create an instance of InputSchemaMapping from a dict
input_schema_mapping_from_dict = InputSchemaMapping.from_dict(input_schema_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


