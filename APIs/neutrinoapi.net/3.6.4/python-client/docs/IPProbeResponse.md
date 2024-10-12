# IPProbeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_age** | **int** | The age of the autonomous system (AS) in number of years since registration | 
**as_cidr** | **str** | The autonomous system (AS) CIDR range | 
**as_country_code** | **str** | The autonomous system (AS) ISO 2-letter country code | 
**as_country_code3** | **str** | The autonomous system (AS) ISO 3-letter country code | 
**as_description** | **str** | The autonomous system (AS) description / company name | 
**as_domains** | **List[str]** | Array of all the domains associated with the autonomous system (AS) | 
**asn** | **str** | The autonomous system (AS) number | 
**city** | **str** | Full city name (if detectable) | 
**continent_code** | **str** | ISO 2-letter continent code | 
**country** | **str** | Full country name | 
**country_code** | **str** | ISO 2-letter country code | 
**country_code3** | **str** | ISO 3-letter country code | 
**currency_code** | **str** | ISO 4217 currency code associated with the country | 
**host_domain** | **str** | The IPs host domain | 
**hostname** | **str** | The IPs full hostname (PTR) | 
**ip** | **str** | The IP address | 
**is_bogon** | **bool** | True if this is a bogon IP address such as a private network, local network or reserved address | 
**is_hosting** | **bool** | True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types | 
**is_isp** | **bool** | True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types | 
**is_proxy** | **bool** | True if this IP ia a proxy | 
**is_v4_mapped** | **bool** | True if this is a &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses\&quot;&gt;IPv4 mapped IPv6 address&lt;/a&gt; | 
**is_v6** | **bool** | True if this is a IPv6 address. False if IPv4 | 
**is_vpn** | **bool** | True if this IP ia a VPN | 
**provider_description** | **str** | A description of the provider (usually extracted from the providers website) | 
**provider_domain** | **str** | The domain name of the provider | 
**provider_type** | **str** | The detected provider type, possible values are: &lt;br&gt; &lt;ul&gt; &lt;li&gt;isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers&lt;/li&gt; &lt;li&gt;hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities&lt;/li&gt; &lt;li&gt;vpn - IP belongs to a VPN provider&lt;/li&gt; &lt;li&gt;proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies&lt;/li&gt; &lt;li&gt;university - IP belongs to a university/college/campus&lt;/li&gt; &lt;li&gt;government - IP belongs to a government department. This includes military facilities&lt;/li&gt; &lt;li&gt;commercial - IP belongs to a commercial entity such as a corporate headquarters or company office&lt;/li&gt; &lt;li&gt;unknown - could not identify the provider type&lt;/li&gt; &lt;/ul&gt; | 
**provider_website** | **str** | The website URL for the provider | 
**region** | **str** | Full region name (if detectable) | 
**region_code** | **str** | ISO 3166-2 region code (if detectable) | 
**valid** | **bool** | True if this is a valid IPv4 or IPv6 address | 
**vpn_domain** | **str** | The domain of the VPN provider (may be empty if the VPN domain is not detectable) | 

## Example

```python
from openapi_client.models.ip_probe_response import IPProbeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IPProbeResponse from a JSON string
ip_probe_response_instance = IPProbeResponse.from_json(json)
# print the JSON string representation of the object
print(IPProbeResponse.to_json())

# convert the object into a dict
ip_probe_response_dict = ip_probe_response_instance.to_dict()
# create an instance of IPProbeResponse from a dict
ip_probe_response_from_dict = IPProbeResponse.from_dict(ip_probe_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


