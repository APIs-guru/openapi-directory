# NetworkInterfaceAssociation

Network interface and its custom security rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Network interface ID. | [optional] [readonly] 
**security_rules** | [**List[NetworkInterfaceAssociationSecurityRulesInner]**](NetworkInterfaceAssociationSecurityRulesInner.md) | Collection of custom security rules. | [optional] 

## Example

```python
from openapi_client.models.network_interface_association import NetworkInterfaceAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceAssociation from a JSON string
network_interface_association_instance = NetworkInterfaceAssociation.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceAssociation.to_json())

# convert the object into a dict
network_interface_association_dict = network_interface_association_instance.to_dict()
# create an instance of NetworkInterfaceAssociation from a dict
network_interface_association_from_dict = NetworkInterfaceAssociation.from_dict(network_interface_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


