# SecurityGroupNetworkInterface

Network interface and all its associated security rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the network interface. | [optional] 
**security_rule_associations** | [**SecurityRuleAssociations**](SecurityRuleAssociations.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_group_network_interface import SecurityGroupNetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityGroupNetworkInterface from a JSON string
security_group_network_interface_instance = SecurityGroupNetworkInterface.from_json(json)
# print the JSON string representation of the object
print(SecurityGroupNetworkInterface.to_json())

# convert the object into a dict
security_group_network_interface_dict = security_group_network_interface_instance.to_dict()
# create an instance of SecurityGroupNetworkInterface from a dict
security_group_network_interface_from_dict = SecurityGroupNetworkInterface.from_dict(security_group_network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


