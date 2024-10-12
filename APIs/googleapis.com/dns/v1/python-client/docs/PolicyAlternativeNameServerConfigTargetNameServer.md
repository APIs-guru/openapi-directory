# PolicyAlternativeNameServerConfigTargetNameServer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarding_path** | **str** | Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target. | [optional] 
**ipv4_address** | **str** | IPv4 address to forward queries to. | [optional] 
**ipv6_address** | **str** | IPv6 address to forward to. Does not accept both fields (ipv4 &amp; ipv6) being populated. Public preview as of November 2022. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#policyAlternativeNameServerConfigTargetNameServer']

## Example

```python
from openapi_client.models.policy_alternative_name_server_config_target_name_server import PolicyAlternativeNameServerConfigTargetNameServer

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAlternativeNameServerConfigTargetNameServer from a JSON string
policy_alternative_name_server_config_target_name_server_instance = PolicyAlternativeNameServerConfigTargetNameServer.from_json(json)
# print the JSON string representation of the object
print(PolicyAlternativeNameServerConfigTargetNameServer.to_json())

# convert the object into a dict
policy_alternative_name_server_config_target_name_server_dict = policy_alternative_name_server_config_target_name_server_instance.to_dict()
# create an instance of PolicyAlternativeNameServerConfigTargetNameServer from a dict
policy_alternative_name_server_config_target_name_server_from_dict = PolicyAlternativeNameServerConfigTargetNameServer.from_dict(policy_alternative_name_server_config_target_name_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


