# SecurityRuleAssociations

All security rules associated with the network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_security_rules** | [**List[NetworkInterfaceAssociationSecurityRulesInner]**](NetworkInterfaceAssociationSecurityRulesInner.md) | Collection of default security rules of the network security group. | [optional] 
**effective_security_rules** | [**List[SecurityRuleAssociationsEffectiveSecurityRulesInner]**](SecurityRuleAssociationsEffectiveSecurityRulesInner.md) | Collection of effective security rules. | [optional] 
**network_interface_association** | [**NetworkInterfaceAssociation**](NetworkInterfaceAssociation.md) |  | [optional] 
**subnet_association** | [**SubnetAssociation**](SubnetAssociation.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_rule_associations import SecurityRuleAssociations

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityRuleAssociations from a JSON string
security_rule_associations_instance = SecurityRuleAssociations.from_json(json)
# print the JSON string representation of the object
print(SecurityRuleAssociations.to_json())

# convert the object into a dict
security_rule_associations_dict = security_rule_associations_instance.to_dict()
# create an instance of SecurityRuleAssociations from a dict
security_rule_associations_from_dict = SecurityRuleAssociations.from_dict(security_rule_associations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


