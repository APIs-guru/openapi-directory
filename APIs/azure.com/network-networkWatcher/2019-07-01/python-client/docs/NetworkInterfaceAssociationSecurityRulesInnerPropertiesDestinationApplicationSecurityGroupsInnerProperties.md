# NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties

Application security group properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_properties import NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties from a JSON string
network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_properties_instance = NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties.to_json())

# convert the object into a dict
network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_properties_dict = network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_properties_instance.to_dict()
# create an instance of NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties from a dict
network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_properties_from_dict = NetworkInterfaceAssociationSecurityRulesInnerPropertiesDestinationApplicationSecurityGroupsInnerProperties.from_dict(network_interface_association_security_rules_inner_properties_destination_application_security_groups_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


