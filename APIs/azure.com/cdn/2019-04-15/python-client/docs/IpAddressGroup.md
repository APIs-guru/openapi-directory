# IpAddressGroup

CDN Ip address group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_region** | **str** | The delivery region of the ip address group | [optional] 
**ipv4_addresses** | [**List[CidrIpAddress]**](CidrIpAddress.md) | The list of ip v4 addresses. | [optional] 
**ipv6_addresses** | [**List[CidrIpAddress]**](CidrIpAddress.md) | The list of ip v6 addresses. | [optional] 

## Example

```python
from openapi_client.models.ip_address_group import IpAddressGroup

# TODO update the JSON string below
json = "{}"
# create an instance of IpAddressGroup from a JSON string
ip_address_group_instance = IpAddressGroup.from_json(json)
# print the JSON string representation of the object
print(IpAddressGroup.to_json())

# convert the object into a dict
ip_address_group_dict = ip_address_group_instance.to_dict()
# create an instance of IpAddressGroup from a dict
ip_address_group_from_dict = IpAddressGroup.from_dict(ip_address_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


