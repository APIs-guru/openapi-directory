# ExternalAccessRule

External access firewall rules for filtering incoming traffic destined to `ExternalAddress` resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action that the external access rule performs. | [optional] 
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | User-provided description for this external access rule. | [optional] 
**destination_ip_ranges** | [**List[IpRange]**](IpRange.md) | If destination ranges are specified, the external access rule applies only to the traffic that has a destination IP address in these ranges. The specified IP addresses must have reserved external IP addresses in the scope of the parent network policy. To match all external IP addresses in the scope of the parent network policy, specify &#x60;0.0.0.0/0&#x60;. To match a specific external IP address, specify it using the &#x60;IpRange.external_address&#x60; property. | [optional] 
**destination_ports** | **List[str]** | A list of destination ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: &#x60;[\&quot;22\&quot;]&#x60;, &#x60;[\&quot;80\&quot;,\&quot;443\&quot;]&#x60;, or &#x60;[\&quot;12345-12349\&quot;]&#x60;. To match all destination ports, specify &#x60;[\&quot;0-65535\&quot;]&#x60;. | [optional] 
**ip_protocol** | **str** | The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): &#x60;tcp&#x60;, &#x60;udp&#x60;, or &#x60;icmp&#x60;. | [optional] 
**name** | **str** | Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule&#x60; | [optional] [readonly] 
**priority** | **int** | External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority &#x60;100&#x60; has higher precedence than a rule with priority &#x60;101&#x60;. | [optional] 
**source_ip_ranges** | [**List[IpRange]**](IpRange.md) | If source ranges are specified, the external access rule applies only to traffic that has a source IP address in these ranges. These ranges can either be expressed in the CIDR format or as an IP address. As only inbound rules are supported, &#x60;ExternalAddress&#x60; resources cannot be the source IP addresses of an external access rule. To match all source addresses, specify &#x60;0.0.0.0/0&#x60;. | [optional] 
**source_ports** | **List[str]** | A list of source ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: &#x60;[\&quot;22\&quot;]&#x60;, &#x60;[\&quot;80\&quot;,\&quot;443\&quot;]&#x60;, or &#x60;[\&quot;12345-12349\&quot;]&#x60;. To match all source ports, specify &#x60;[\&quot;0-65535\&quot;]&#x60;. | [optional] 
**state** | **str** | Output only. The state of the resource. | [optional] [readonly] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_access_rule import ExternalAccessRule

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalAccessRule from a JSON string
external_access_rule_instance = ExternalAccessRule.from_json(json)
# print the JSON string representation of the object
print(ExternalAccessRule.to_json())

# convert the object into a dict
external_access_rule_dict = external_access_rule_instance.to_dict()
# create an instance of ExternalAccessRule from a dict
external_access_rule_from_dict = ExternalAccessRule.from_dict(external_access_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


