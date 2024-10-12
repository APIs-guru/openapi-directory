# APIDefinitionVersionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_versioned** | **bool** |  | [optional] 
**versions** | [**Dict[str, VersionDefinition]**](VersionDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_version_data import APIDefinitionVersionData

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionVersionData from a JSON string
api_definition_version_data_instance = APIDefinitionVersionData.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionVersionData.to_json())

# convert the object into a dict
api_definition_version_data_dict = api_definition_version_data_instance.to_dict()
# create an instance of APIDefinitionVersionData from a dict
api_definition_version_data_from_dict = APIDefinitionVersionData.from_dict(api_definition_version_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


