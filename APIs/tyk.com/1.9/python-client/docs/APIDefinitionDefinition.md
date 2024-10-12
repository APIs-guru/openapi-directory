# APIDefinitionDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**location** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_definition import APIDefinitionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionDefinition from a JSON string
api_definition_definition_instance = APIDefinitionDefinition.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionDefinition.to_json())

# convert the object into a dict
api_definition_definition_dict = api_definition_definition_instance.to_dict()
# create an instance of APIDefinitionDefinition from a dict
api_definition_definition_from_dict = APIDefinitionDefinition.from_dict(api_definition_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


