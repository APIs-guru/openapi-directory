# SubnetSharedPublicIpAddressConfiguration

Configuration for public IP address sharing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ports** | [**List[Port]**](Port.md) | Backend ports that virtual machines on this subnet are allowed to expose | [optional] 

## Example

```python
from openapi_client.models.subnet_shared_public_ip_address_configuration import SubnetSharedPublicIpAddressConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetSharedPublicIpAddressConfiguration from a JSON string
subnet_shared_public_ip_address_configuration_instance = SubnetSharedPublicIpAddressConfiguration.from_json(json)
# print the JSON string representation of the object
print(SubnetSharedPublicIpAddressConfiguration.to_json())

# convert the object into a dict
subnet_shared_public_ip_address_configuration_dict = subnet_shared_public_ip_address_configuration_instance.to_dict()
# create an instance of SubnetSharedPublicIpAddressConfiguration from a dict
subnet_shared_public_ip_address_configuration_from_dict = SubnetSharedPublicIpAddressConfiguration.from_dict(subnet_shared_public_ip_address_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


