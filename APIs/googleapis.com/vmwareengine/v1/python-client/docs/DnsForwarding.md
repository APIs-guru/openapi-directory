# DnsForwarding

DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**forwarding_rules** | [**List[ForwardingRule]**](ForwardingRule.md) | Required. List of domain mappings to configure | [optional] 
**name** | **str** | Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding&#x60; | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dns_forwarding import DnsForwarding

# TODO update the JSON string below
json = "{}"
# create an instance of DnsForwarding from a JSON string
dns_forwarding_instance = DnsForwarding.from_json(json)
# print the JSON string representation of the object
print(DnsForwarding.to_json())

# convert the object into a dict
dns_forwarding_dict = dns_forwarding_instance.to_dict()
# create an instance of DnsForwarding from a dict
dns_forwarding_from_dict = DnsForwarding.from_dict(dns_forwarding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


