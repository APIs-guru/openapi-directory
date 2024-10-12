# DnsZonePair

* Represents a pair of private and peering DNS zone resources. *

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_peering_zone** | [**DnsZone**](DnsZone.md) |  | [optional] 
**producer_private_zone** | [**DnsZone**](DnsZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.dns_zone_pair import DnsZonePair

# TODO update the JSON string below
json = "{}"
# create an instance of DnsZonePair from a JSON string
dns_zone_pair_instance = DnsZonePair.from_json(json)
# print the JSON string representation of the object
print(DnsZonePair.to_json())

# convert the object into a dict
dns_zone_pair_dict = dns_zone_pair_instance.to_dict()
# create an instance of DnsZonePair from a dict
dns_zone_pair_from_dict = DnsZonePair.from_dict(dns_zone_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


