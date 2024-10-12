# AddDnsZoneResponse

Represents managed DNS zones created in the shared producer host and consumer projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_peering_zone** | [**DnsZone**](DnsZone.md) |  | [optional] 
**producer_private_zone** | [**DnsZone**](DnsZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_dns_zone_response import AddDnsZoneResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddDnsZoneResponse from a JSON string
add_dns_zone_response_instance = AddDnsZoneResponse.from_json(json)
# print the JSON string representation of the object
print(AddDnsZoneResponse.to_json())

# convert the object into a dict
add_dns_zone_response_dict = add_dns_zone_response_instance.to_dict()
# create an instance of AddDnsZoneResponse from a dict
add_dns_zone_response_from_dict = AddDnsZoneResponse.from_dict(add_dns_zone_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


