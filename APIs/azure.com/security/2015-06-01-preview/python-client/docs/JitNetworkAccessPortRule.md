# JitNetworkAccessPortRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_source_address_prefix** | **str** | Mutually exclusive with the \&quot;allowedSourceAddressPrefixes\&quot; parameter. Should be an IP address or CIDR, for example \&quot;192.168.0.3\&quot; or \&quot;192.168.0.0/16\&quot;. | [optional] 
**allowed_source_address_prefixes** | **List[str]** | Mutually exclusive with the \&quot;allowedSourceAddressPrefix\&quot; parameter. | [optional] 
**max_request_access_duration** | **str** | Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day | 
**number** | **int** |  | 
**protocol** | **str** |  | 

## Example

```python
from openapi_client.models.jit_network_access_port_rule import JitNetworkAccessPortRule

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPortRule from a JSON string
jit_network_access_port_rule_instance = JitNetworkAccessPortRule.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPortRule.to_json())

# convert the object into a dict
jit_network_access_port_rule_dict = jit_network_access_port_rule_instance.to_dict()
# create an instance of JitNetworkAccessPortRule from a dict
jit_network_access_port_rule_from_dict = JitNetworkAccessPortRule.from_dict(jit_network_access_port_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


