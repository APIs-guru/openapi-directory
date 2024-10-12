# DscNodeConfigurationCreateOrUpdateParameters

The parameters supplied to the create or update node configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**DscConfigurationAssociationProperty**](DscConfigurationAssociationProperty.md) |  | 
**increment_node_configuration_build** | **bool** | If a new build version of NodeConfiguration is required. | [optional] 
**name** | **str** | Name of the node configuration. | 
**source** | [**ContentSource**](ContentSource.md) |  | 

## Example

```python
from openapi_client.models.dsc_node_configuration_create_or_update_parameters import DscNodeConfigurationCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeConfigurationCreateOrUpdateParameters from a JSON string
dsc_node_configuration_create_or_update_parameters_instance = DscNodeConfigurationCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DscNodeConfigurationCreateOrUpdateParameters.to_json())

# convert the object into a dict
dsc_node_configuration_create_or_update_parameters_dict = dsc_node_configuration_create_or_update_parameters_instance.to_dict()
# create an instance of DscNodeConfigurationCreateOrUpdateParameters from a dict
dsc_node_configuration_create_or_update_parameters_from_dict = DscNodeConfigurationCreateOrUpdateParameters.from_dict(dsc_node_configuration_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


