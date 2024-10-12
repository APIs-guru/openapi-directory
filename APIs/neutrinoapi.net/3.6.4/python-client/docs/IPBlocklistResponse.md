# IPBlocklistResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocklists** | **List[str]** | An array of strings indicating which blocklist categories this IP is listed on | 
**cidr** | **str** | The CIDR address for this listing (only set if the IP is listed) | 
**ip** | **str** | The IP address | 
**is_bot** | **bool** | IP is hosting a malicious bot or is part of a botnet. This is a broad category which includes brute-force crackers | 
**is_dshield** | **bool** | IP has been flagged as a significant attack source by DShield (dshield.org) | 
**is_exploit_bot** | **bool** | IP is hosting an exploit finding bot or is running exploit scanning software | 
**is_hijacked** | **bool** | IP is part of a hijacked netblock or a netblock controlled by a criminal organization | 
**is_listed** | **bool** | Is this IP on a blocklist | 
**is_malware** | **bool** | IP is involved in distributing or is running malware | 
**is_proxy** | **bool** | IP has been detected as an anonymous web proxy or anonymous HTTP proxy | 
**is_spam_bot** | **bool** | IP address is hosting a spam bot, comment spamming or any other spamming type software | 
**is_spider** | **bool** | IP is running a hostile web spider / web crawler | 
**is_spyware** | **bool** | IP is involved in distributing or is running spyware | 
**is_tor** | **bool** | IP is a Tor node or running a Tor related service | 
**is_vpn** | **bool** | IP belongs to a public VPN provider (only set if the &#39;vpn-lookup&#39; option is enabled) | 
**last_seen** | **int** | The unix time when this IP was last seen on any blocklist. IPs are automatically removed after 7 days therefor this value will never be older than 7 days | 
**list_count** | **int** | The number of blocklists the IP is listed on | 
**sensors** | [**List[BlocklistSensor]**](BlocklistSensor.md) | An array of objects containing details on which specific sensors detected the IP | 

## Example

```python
from openapi_client.models.ip_blocklist_response import IPBlocklistResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IPBlocklistResponse from a JSON string
ip_blocklist_response_instance = IPBlocklistResponse.from_json(json)
# print the JSON string representation of the object
print(IPBlocklistResponse.to_json())

# convert the object into a dict
ip_blocklist_response_dict = ip_blocklist_response_instance.to_dict()
# create an instance of IPBlocklistResponse from a dict
ip_blocklist_response_from_dict = IPBlocklistResponse.from_dict(ip_blocklist_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


