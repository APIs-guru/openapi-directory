# JsonSchema

The JSON schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The JSON content. | [optional] 
**title** | **str** | The JSON title. | [optional] 

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


