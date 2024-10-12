# IPInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | Name of the city (if detectable) | 
**continent_code** | **str** | ISO 2-letter continent code | 
**country** | **str** | Full country name | 
**country_code** | **str** | ISO 2-letter country code | 
**country_code3** | **str** | ISO 3-letter country code | 
**currency_code** | **str** | ISO 4217 currency code associated with the country | 
**host_domain** | **str** | The IPs host domain (only set if reverse-lookup has been used) | 
**hostname** | **str** | The IPs full hostname (only set if reverse-lookup has been used) | 
**ip** | **str** | The IP address | 
**is_bogon** | **bool** | True if this is a bogon IP address such as a private network, local network or reserved address | 
**is_v4_mapped** | **bool** | True if this is a &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses\&quot;&gt;IPv4 mapped IPv6 address&lt;/a&gt; | 
**is_v6** | **bool** | True if this is a IPv6 address. False if IPv4 | 
**latitude** | **float** | Location latitude | 
**longitude** | **float** | Location longitude | 
**region** | **str** | Name of the region (if detectable) | 
**region_code** | **str** | ISO 3166-2 region code (if detectable) | 
**timezone** | [**Timezone**](Timezone.md) |  | 
**valid** | **bool** | True if this is a valid IPv4 or IPv6 address | 

## Example

```python
from openapi_client.models.ip_info_response import IPInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IPInfoResponse from a JSON string
ip_info_response_instance = IPInfoResponse.from_json(json)
# print the JSON string representation of the object
print(IPInfoResponse.to_json())

# convert the object into a dict
ip_info_response_dict = ip_info_response_instance.to_dict()
# create an instance of IPInfoResponse from a dict
ip_info_response_from_dict = IPInfoResponse.from_dict(ip_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


