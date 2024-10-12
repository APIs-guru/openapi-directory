# DnsCacheConfig

Configuration for NodeLocal DNSCache

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether NodeLocal DNSCache is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.dns_cache_config import DnsCacheConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DnsCacheConfig from a JSON string
dns_cache_config_instance = DnsCacheConfig.from_json(json)
# print the JSON string representation of the object
print(DnsCacheConfig.to_json())

# convert the object into a dict
dns_cache_config_dict = dns_cache_config_instance.to_dict()
# create an instance of DnsCacheConfig from a dict
dns_cache_config_from_dict = DnsCacheConfig.from_dict(dns_cache_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


