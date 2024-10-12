# DscNodeExtensionHandlerAssociationProperty

The dsc extensionHandler property associated with the node

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the extension handler. | [optional] 
**version** | **str** | Gets or sets the version of the extension handler. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_extension_handler_association_property import DscNodeExtensionHandlerAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeExtensionHandlerAssociationProperty from a JSON string
dsc_node_extension_handler_association_property_instance = DscNodeExtensionHandlerAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(DscNodeExtensionHandlerAssociationProperty.to_json())

# convert the object into a dict
dsc_node_extension_handler_association_property_dict = dsc_node_extension_handler_association_property_instance.to_dict()
# create an instance of DscNodeExtensionHandlerAssociationProperty from a dict
dsc_node_extension_handler_association_property_from_dict = DscNodeExtensionHandlerAssociationProperty.from_dict(dsc_node_extension_handler_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


