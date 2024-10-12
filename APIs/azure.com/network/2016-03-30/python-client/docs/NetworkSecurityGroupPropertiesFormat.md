# NetworkSecurityGroupPropertiesFormat

Network Security Group resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_security_rules** | [**List[SecurityRule]**](SecurityRule.md) | Gets or sets Default security rules of network security group | [optional] 
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | Gets collection of references to Network Interfaces | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | Gets or sets resource GUID property of the network security group resource | [optional] 
**security_rules** | [**List[SecurityRule]**](SecurityRule.md) | Gets or sets Security rules of network security group | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | Gets collection of references to subnets | [optional] 

## Example

```python
from openapi_client.models.network_security_group_properties_format import NetworkSecurityGroupPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSecurityGroupPropertiesFormat from a JSON string
network_security_group_properties_format_instance = NetworkSecurityGroupPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(NetworkSecurityGroupPropertiesFormat.to_json())

# convert the object into a dict
network_security_group_properties_format_dict = network_security_group_properties_format_instance.to_dict()
# create an instance of NetworkSecurityGroupPropertiesFormat from a dict
network_security_group_properties_format_from_dict = NetworkSecurityGroupPropertiesFormat.from_dict(network_security_group_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


