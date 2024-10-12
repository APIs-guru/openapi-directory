# UpdateNetworkWirelessSsidRequestDnsRewrite

DNS servers rewrite settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_custom_nameservers** | **List[str]** | User specified DNS servers (up to two servers) | [optional] 
**enabled** | **bool** | Boolean indicating whether or not DNS server rewrite is enabled. If disabled, upstream DNS will be used | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_dns_rewrite import UpdateNetworkWirelessSsidRequestDnsRewrite

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestDnsRewrite from a JSON string
update_network_wireless_ssid_request_dns_rewrite_instance = UpdateNetworkWirelessSsidRequestDnsRewrite.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestDnsRewrite.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_dns_rewrite_dict = update_network_wireless_ssid_request_dns_rewrite_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestDnsRewrite from a dict
update_network_wireless_ssid_request_dns_rewrite_from_dict = UpdateNetworkWirelessSsidRequestDnsRewrite.from_dict(update_network_wireless_ssid_request_dns_rewrite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


