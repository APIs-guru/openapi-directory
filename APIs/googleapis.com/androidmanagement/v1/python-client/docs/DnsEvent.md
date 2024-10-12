# DnsEvent

A DNS lookup event was initiated through the standard network stack.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** | The hostname that was looked up. | [optional] 
**ip_addresses** | **List[str]** | The (possibly truncated) list of the IP addresses returned for DNS lookup (max 10 IPv4 or IPv6 addresses). | [optional] 
**package_name** | **str** | The package name of the UID that performed the DNS lookup. | [optional] 
**total_ip_addresses_returned** | **str** | The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log. | [optional] 

## Example

```python
from openapi_client.models.dns_event import DnsEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DnsEvent from a JSON string
dns_event_instance = DnsEvent.from_json(json)
# print the JSON string representation of the object
print(DnsEvent.to_json())

# convert the object into a dict
dns_event_dict = dns_event_instance.to_dict()
# create an instance of DnsEvent from a dict
dns_event_from_dict = DnsEvent.from_dict(dns_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


