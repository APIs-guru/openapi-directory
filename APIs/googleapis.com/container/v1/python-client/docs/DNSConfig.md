# DNSConfig

DNSConfig contains the desired set of options for configuring clusterDNS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_dns** | **str** | cluster_dns indicates which in-cluster DNS provider should be used. | [optional] 
**cluster_dns_domain** | **str** | cluster_dns_domain is the suffix used for all cluster service records. | [optional] 
**cluster_dns_scope** | **str** | cluster_dns_scope indicates the scope of access to cluster DNS records. | [optional] 

## Example

```python
from openapi_client.models.dns_config import DNSConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DNSConfig from a JSON string
dns_config_instance = DNSConfig.from_json(json)
# print the JSON string representation of the object
print(DNSConfig.to_json())

# convert the object into a dict
dns_config_dict = dns_config_instance.to_dict()
# create an instance of DNSConfig from a dict
dns_config_from_dict = DNSConfig.from_dict(dns_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


