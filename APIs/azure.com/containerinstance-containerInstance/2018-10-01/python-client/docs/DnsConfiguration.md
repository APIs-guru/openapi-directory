# DnsConfiguration

DNS configuration for the container group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name_servers** | **List[str]** | The DNS servers for the container group. | 
**options** | **str** | The DNS options for the container group. | [optional] 
**search_domains** | **str** | The DNS search domains for hostname lookup in the container group. | [optional] 

## Example

```python
from openapi_client.models.dns_configuration import DnsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DnsConfiguration from a JSON string
dns_configuration_instance = DnsConfiguration.from_json(json)
# print the JSON string representation of the object
print(DnsConfiguration.to_json())

# convert the object into a dict
dns_configuration_dict = dns_configuration_instance.to_dict()
# create an instance of DnsConfiguration from a dict
dns_configuration_from_dict = DnsConfiguration.from_dict(dns_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


