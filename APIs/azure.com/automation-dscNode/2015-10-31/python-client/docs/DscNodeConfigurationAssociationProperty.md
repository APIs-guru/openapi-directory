# DscNodeConfigurationAssociationProperty

The dsc node configuration property associated with the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the dsc node configuration. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_configuration_association_property import DscNodeConfigurationAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeConfigurationAssociationProperty from a JSON string
dsc_node_configuration_association_property_instance = DscNodeConfigurationAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(DscNodeConfigurationAssociationProperty.to_json())

# convert the object into a dict
dsc_node_configuration_association_property_dict = dsc_node_configuration_association_property_instance.to_dict()
# create an instance of DscNodeConfigurationAssociationProperty from a dict
dsc_node_configuration_association_property_from_dict = DscNodeConfigurationAssociationProperty.from_dict(dsc_node_configuration_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


