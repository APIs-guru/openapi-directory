# GetDnsZoneResponse

Represents managed DNS zones created in the shared Producer host and consumer projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_peering_zone** | [**DnsZone**](DnsZone.md) |  | [optional] 
**producer_private_zone** | [**DnsZone**](DnsZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_dns_zone_response import GetDnsZoneResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDnsZoneResponse from a JSON string
get_dns_zone_response_instance = GetDnsZoneResponse.from_json(json)
# print the JSON string representation of the object
print(GetDnsZoneResponse.to_json())

# convert the object into a dict
get_dns_zone_response_dict = get_dns_zone_response_instance.to_dict()
# create an instance of GetDnsZoneResponse from a dict
get_dns_zone_response_from_dict = GetDnsZoneResponse.from_dict(get_dns_zone_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


