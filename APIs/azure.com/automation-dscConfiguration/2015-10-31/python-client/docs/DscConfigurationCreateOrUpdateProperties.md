# DscConfigurationCreateOrUpdateProperties

The properties to create or update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the configuration. | [optional] 
**log_progress** | **bool** | Gets or sets progress log option. | [optional] 
**log_verbose** | **bool** | Gets or sets verbose log option. | [optional] 
**parameters** | [**Dict[str, DscConfigurationParameter]**](DscConfigurationParameter.md) | Gets or sets the configuration parameters. | [optional] 
**source** | [**ContentSource**](ContentSource.md) |  | 

## Example

```python
from openapi_client.models.dsc_configuration_create_or_update_properties import DscConfigurationCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationCreateOrUpdateProperties from a JSON string
dsc_configuration_create_or_update_properties_instance = DscConfigurationCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationCreateOrUpdateProperties.to_json())

# convert the object into a dict
dsc_configuration_create_or_update_properties_dict = dsc_configuration_create_or_update_properties_instance.to_dict()
# create an instance of DscConfigurationCreateOrUpdateProperties from a dict
dsc_configuration_create_or_update_properties_from_dict = DscConfigurationCreateOrUpdateProperties.from_dict(dsc_configuration_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


