# NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner

An application security group in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties**](NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner import NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner from a JSON string
network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_instance = NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner.to_json())

# convert the object into a dict
network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_dict = network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_instance.to_dict()
# create an instance of NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner from a dict
network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_from_dict = NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInner.from_dict(network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


