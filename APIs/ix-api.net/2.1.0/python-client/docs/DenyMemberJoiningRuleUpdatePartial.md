# DenyMemberJoiningRuleUpdatePartial

A vlan member joining rule update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account to which access to the network service should be granted or denied.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.deny_member_joining_rule_update_partial import DenyMemberJoiningRuleUpdatePartial

# TODO update the JSON string below
json = "{}"
# create an instance of DenyMemberJoiningRuleUpdatePartial from a JSON string
deny_member_joining_rule_update_partial_instance = DenyMemberJoiningRuleUpdatePartial.from_json(json)
# print the JSON string representation of the object
print(DenyMemberJoiningRuleUpdatePartial.to_json())

# convert the object into a dict
deny_member_joining_rule_update_partial_dict = deny_member_joining_rule_update_partial_instance.to_dict()
# create an instance of DenyMemberJoiningRuleUpdatePartial from a dict
deny_member_joining_rule_update_partial_from_dict = DenyMemberJoiningRuleUpdatePartial.from_dict(deny_member_joining_rule_update_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


