# DNSSettings

The DNS(Domain Name Server) settings of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_dns_server** | **str** | The primary IPv4 DNS server for the device | [optional] 
**primary_ipv6_dns_server** | **str** | The primary IPv6 DNS server for the device | [optional] 
**secondary_dns_servers** | **List[str]** | The secondary IPv4 DNS server for the device | [optional] 
**secondary_ipv6_dns_servers** | **List[str]** | The secondary IPv6 DNS server for the device | [optional] 

## Example

```python
from openapi_client.models.dns_settings import DNSSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DNSSettings from a JSON string
dns_settings_instance = DNSSettings.from_json(json)
# print the JSON string representation of the object
print(DNSSettings.to_json())

# convert the object into a dict
dns_settings_dict = dns_settings_instance.to_dict()
# create an instance of DNSSettings from a dict
dns_settings_from_dict = DNSSettings.from_dict(dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


