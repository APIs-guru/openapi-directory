# CustomApiDefinitionCollection

A list of custom API definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CustomApiDefinition]**](CustomApiDefinition.md) | Collection of custom APIs | [optional] 

## Example

```python
from openapi_client.models.custom_api_definition_collection import CustomApiDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of CustomApiDefinitionCollection from a JSON string
custom_api_definition_collection_instance = CustomApiDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(CustomApiDefinitionCollection.to_json())

# convert the object into a dict
custom_api_definition_collection_dict = custom_api_definition_collection_instance.to_dict()
# create an instance of CustomApiDefinitionCollection from a dict
custom_api_definition_collection_from_dict = CustomApiDefinitionCollection.from_dict(custom_api_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


