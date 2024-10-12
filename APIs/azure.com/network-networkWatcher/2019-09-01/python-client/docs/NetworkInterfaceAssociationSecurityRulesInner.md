# NetworkInterfaceAssociationSecurityRulesInner

Network security rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**NetworkInterfaceAssociationSecurityRulesInnerProperties**](NetworkInterfaceAssociationSecurityRulesInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_interface_association_security_rules_inner import NetworkInterfaceAssociationSecurityRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceAssociationSecurityRulesInner from a JSON string
network_interface_association_security_rules_inner_instance = NetworkInterfaceAssociationSecurityRulesInner.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceAssociationSecurityRulesInner.to_json())

# convert the object into a dict
network_interface_association_security_rules_inner_dict = network_interface_association_security_rules_inner_instance.to_dict()
# create an instance of NetworkInterfaceAssociationSecurityRulesInner from a dict
network_interface_association_security_rules_inner_from_dict = NetworkInterfaceAssociationSecurityRulesInner.from_dict(network_interface_association_security_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


