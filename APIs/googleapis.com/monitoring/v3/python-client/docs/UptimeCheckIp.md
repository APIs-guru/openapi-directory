# UptimeCheckIp

Contains the region, location, and list of IP addresses where checkers in the location run from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The IP address from which the Uptime check originates. This is a fully specified IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either IPv4 or IPv6 format. | [optional] 
**location** | **str** | A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category. | [optional] 
**region** | **str** | A broad region category in which the IP address is located. | [optional] 

## Example

```python
from openapi_client.models.uptime_check_ip import UptimeCheckIp

# TODO update the JSON string below
json = "{}"
# create an instance of UptimeCheckIp from a JSON string
uptime_check_ip_instance = UptimeCheckIp.from_json(json)
# print the JSON string representation of the object
print(UptimeCheckIp.to_json())

# convert the object into a dict
uptime_check_ip_dict = uptime_check_ip_instance.to_dict()
# create an instance of UptimeCheckIp from a dict
uptime_check_ip_from_dict = UptimeCheckIp.from_dict(uptime_check_ip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


