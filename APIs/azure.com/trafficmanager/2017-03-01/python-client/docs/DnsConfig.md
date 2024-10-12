# DnsConfig

Class containing DNS settings in a Traffic Manager profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Gets or sets the fully-qualified domain name (FQDN) of the Traffic Manager profile.  This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager. | [optional] 
**relative_name** | **str** | Gets or sets the relative DNS name provided by this Traffic Manager profile.  This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile. | [optional] 
**ttl** | **int** | Gets or sets the DNS Time-To-Live (TTL), in seconds.  This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile. | [optional] 

## Example

```python
from openapi_client.models.dns_config import DnsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DnsConfig from a JSON string
dns_config_instance = DnsConfig.from_json(json)
# print the JSON string representation of the object
print(DnsConfig.to_json())

# convert the object into a dict
dns_config_dict = dns_config_instance.to_dict()
# create an instance of DnsConfig from a dict
dns_config_from_dict = DnsConfig.from_dict(dns_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


