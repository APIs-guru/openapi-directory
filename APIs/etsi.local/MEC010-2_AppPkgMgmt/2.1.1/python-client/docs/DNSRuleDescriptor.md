# DNSRuleDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_rule_id** | **str** | Identifies the DNS Rule | 
**domain_name** | **str** | FQDN of the DNS rule | 
**ip_address** | **str** | IP address given by the DNS rule | 
**ip_address_type** | [**IpAddressType**](IpAddressType.md) |  | 
**ttl** | **int** | Time-to-live value | [optional] 

## Example

```python
from openapi_client.models.dns_rule_descriptor import DNSRuleDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of DNSRuleDescriptor from a JSON string
dns_rule_descriptor_instance = DNSRuleDescriptor.from_json(json)
# print the JSON string representation of the object
print(DNSRuleDescriptor.to_json())

# convert the object into a dict
dns_rule_descriptor_dict = dns_rule_descriptor_instance.to_dict()
# create an instance of DNSRuleDescriptor from a dict
dns_rule_descriptor_from_dict = DNSRuleDescriptor.from_dict(dns_rule_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


