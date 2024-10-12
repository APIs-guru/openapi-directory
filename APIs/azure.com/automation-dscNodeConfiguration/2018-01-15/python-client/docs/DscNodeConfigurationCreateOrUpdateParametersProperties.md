# DscNodeConfigurationCreateOrUpdateParametersProperties

The parameter properties supplied to the create or update node configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**DscConfigurationAssociationProperty**](DscConfigurationAssociationProperty.md) |  | 
**increment_node_configuration_build** | **bool** | If a new build version of NodeConfiguration is required. | [optional] 
**source** | [**ContentSource**](ContentSource.md) |  | 

## Example

```python
from openapi_client.models.dsc_node_configuration_create_or_update_parameters_properties import DscNodeConfigurationCreateOrUpdateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeConfigurationCreateOrUpdateParametersProperties from a JSON string
dsc_node_configuration_create_or_update_parameters_properties_instance = DscNodeConfigurationCreateOrUpdateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(DscNodeConfigurationCreateOrUpdateParametersProperties.to_json())

# convert the object into a dict
dsc_node_configuration_create_or_update_parameters_properties_dict = dsc_node_configuration_create_or_update_parameters_properties_instance.to_dict()
# create an instance of DscNodeConfigurationCreateOrUpdateParametersProperties from a dict
dsc_node_configuration_create_or_update_parameters_properties_from_dict = DscNodeConfigurationCreateOrUpdateParametersProperties.from_dict(dsc_node_configuration_create_or_update_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


