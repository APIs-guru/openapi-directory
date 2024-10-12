# DscConfigurationAssociationProperty

The Dsc configuration property associated with the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the Dsc configuration. | [optional] 

## Example

```python
from openapi_client.models.dsc_configuration_association_property import DscConfigurationAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationAssociationProperty from a JSON string
dsc_configuration_association_property_instance = DscConfigurationAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationAssociationProperty.to_json())

# convert the object into a dict
dsc_configuration_association_property_dict = dsc_configuration_association_property_instance.to_dict()
# create an instance of DscConfigurationAssociationProperty from a dict
dsc_configuration_association_property_from_dict = DscConfigurationAssociationProperty.from_dict(dsc_configuration_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


