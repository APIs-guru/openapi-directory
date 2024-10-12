# DnsZone

Represents a DNS zone resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_suffix** | **str** | The DNS name suffix of this zone e.g. &#x60;example.com.&#x60;. Cloud DNS requires that a DNS suffix ends with a trailing dot. | [optional] 
**name** | **str** | User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. | [optional] 

## Example

```python
from openapi_client.models.dns_zone import DnsZone

# TODO update the JSON string below
json = "{}"
# create an instance of DnsZone from a JSON string
dns_zone_instance = DnsZone.from_json(json)
# print the JSON string representation of the object
print(DnsZone.to_json())

# convert the object into a dict
dns_zone_dict = dns_zone_instance.to_dict()
# create an instance of DnsZone from a dict
dns_zone_from_dict = DnsZone.from_dict(dns_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


