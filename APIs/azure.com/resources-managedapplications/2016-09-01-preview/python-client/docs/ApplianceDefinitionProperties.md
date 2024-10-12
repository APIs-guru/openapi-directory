# ApplianceDefinitionProperties

The appliance definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[ApplianceArtifact]**](ApplianceArtifact.md) | The collection of appliance artifacts. The portal will use the files specified as artifacts to construct the user experience of creating an appliance from an appliance definition. | [optional] 
**authorizations** | [**List[ApplianceProviderAuthorization]**](ApplianceProviderAuthorization.md) | The appliance provider authorizations. | 
**description** | **str** | The appliance definition description. | [optional] 
**display_name** | **str** | The appliance definition display name. | [optional] 
**lock_level** | [**ApplianceLockLevel**](ApplianceLockLevel.md) |  | 
**package_file_uri** | **str** | The appliance definition package file Uri. | 

## Example

```python
from openapi_client.models.appliance_definition_properties import ApplianceDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceDefinitionProperties from a JSON string
appliance_definition_properties_instance = ApplianceDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(ApplianceDefinitionProperties.to_json())

# convert the object into a dict
appliance_definition_properties_dict = appliance_definition_properties_instance.to_dict()
# create an instance of ApplianceDefinitionProperties from a dict
appliance_definition_properties_from_dict = ApplianceDefinitionProperties.from_dict(appliance_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


