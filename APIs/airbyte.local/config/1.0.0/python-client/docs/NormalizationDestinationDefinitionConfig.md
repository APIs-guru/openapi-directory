# NormalizationDestinationDefinitionConfig

describes a normalization config for destination definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalization_integration_type** | **str** | a field indicating the type of integration dialect to use for normalization. | [optional] 
**normalization_repository** | **str** | a field indicating the name of the repository to be used for normalization. If the value of the flag is NULL - normalization is not used. | [optional] 
**normalization_tag** | **str** | a field indicating the tag of the docker repository to be used for normalization. | [optional] 
**supported** | **bool** | whether the destination definition supports normalization. | [default to False]

## Example

```python
from openapi_client.models.normalization_destination_definition_config import NormalizationDestinationDefinitionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NormalizationDestinationDefinitionConfig from a JSON string
normalization_destination_definition_config_instance = NormalizationDestinationDefinitionConfig.from_json(json)
# print the JSON string representation of the object
print(NormalizationDestinationDefinitionConfig.to_json())

# convert the object into a dict
normalization_destination_definition_config_dict = normalization_destination_definition_config_instance.to_dict()
# create an instance of NormalizationDestinationDefinitionConfig from a dict
normalization_destination_definition_config_from_dict = NormalizationDestinationDefinitionConfig.from_dict(normalization_destination_definition_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


