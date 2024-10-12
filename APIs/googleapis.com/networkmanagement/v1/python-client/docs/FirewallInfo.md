# FirewallInfo

For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Possible values: ALLOW, DENY, APPLY_SECURITY_PROFILE_GROUP | [optional] 
**direction** | **str** | Possible values: INGRESS, EGRESS | [optional] 
**display_name** | **str** | The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules. | [optional] 
**firewall_rule_type** | **str** | The firewall rule&#39;s type. | [optional] 
**network_uri** | **str** | The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules. | [optional] 
**policy** | **str** | The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules. | [optional] 
**priority** | **int** | The priority of the firewall rule. | [optional] 
**target_service_accounts** | **List[str]** | The target service accounts specified by the firewall rule. | [optional] 
**target_tags** | **List[str]** | The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules. | [optional] 
**uri** | **str** | The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules. | [optional] 

## Example

```python
from openapi_client.models.firewall_info import FirewallInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallInfo from a JSON string
firewall_info_instance = FirewallInfo.from_json(json)
# print the JSON string representation of the object
print(FirewallInfo.to_json())

# convert the object into a dict
firewall_info_dict = firewall_info_instance.to_dict()
# create an instance of FirewallInfo from a dict
firewall_info_from_dict = FirewallInfo.from_dict(firewall_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


