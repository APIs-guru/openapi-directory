# ApiConnectionDefinitionCollection

A list of API connection definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ApiConnectionDefinition]**](ApiConnectionDefinition.md) | Collection of API connections | [optional] 

## Example

```python
from openapi_client.models.api_connection_definition_collection import ApiConnectionDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConnectionDefinitionCollection from a JSON string
api_connection_definition_collection_instance = ApiConnectionDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(ApiConnectionDefinitionCollection.to_json())

# convert the object into a dict
api_connection_definition_collection_dict = api_connection_definition_collection_instance.to_dict()
# create an instance of ApiConnectionDefinitionCollection from a dict
api_connection_definition_collection_from_dict = ApiConnectionDefinitionCollection.from_dict(api_connection_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


