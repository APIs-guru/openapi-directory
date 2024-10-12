# ManagedApiDefinitionCollection

A list of managed API definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ManagedApiDefinition]**](ManagedApiDefinition.md) | Collection of managed APIs | [optional] 

## Example

```python
from openapi_client.models.managed_api_definition_collection import ManagedApiDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedApiDefinitionCollection from a JSON string
managed_api_definition_collection_instance = ManagedApiDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(ManagedApiDefinitionCollection.to_json())

# convert the object into a dict
managed_api_definition_collection_dict = managed_api_definition_collection_instance.to_dict()
# create an instance of ManagedApiDefinitionCollection from a dict
managed_api_definition_collection_from_dict = ManagedApiDefinitionCollection.from_dict(managed_api_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


