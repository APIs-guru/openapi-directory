# DscNodeConfigurationProperties

Properties for the DscNodeConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**DscConfigurationAssociationProperty**](DscConfigurationAssociationProperty.md) |  | [optional] 
**creation_time** | **datetime** | Gets or sets creation time. | [optional] 
**increment_node_configuration_build** | **bool** | If a new build version of NodeConfiguration is required. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**node_count** | **int** | Number of nodes with this node configuration assigned | [optional] 
**source** | **str** | Source of node configuration. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_configuration_properties import DscNodeConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeConfigurationProperties from a JSON string
dsc_node_configuration_properties_instance = DscNodeConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(DscNodeConfigurationProperties.to_json())

# convert the object into a dict
dsc_node_configuration_properties_dict = dsc_node_configuration_properties_instance.to_dict()
# create an instance of DscNodeConfigurationProperties from a dict
dsc_node_configuration_properties_from_dict = DscNodeConfigurationProperties.from_dict(dsc_node_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


