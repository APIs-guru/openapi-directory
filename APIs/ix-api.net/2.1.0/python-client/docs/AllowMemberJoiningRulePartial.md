# AllowMemberJoiningRulePartial

A rule for members joining a private vlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_max** | **int** | An optional rate limit which has precedence over the capacity set in the network service config. | [optional] 
**capacity_min** | **int** | Require an optional minimum capacity to join the network service. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account to which access to the network service should be granted or denied.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**network_service** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.allow_member_joining_rule_partial import AllowMemberJoiningRulePartial

# TODO update the JSON string below
json = "{}"
# create an instance of AllowMemberJoiningRulePartial from a JSON string
allow_member_joining_rule_partial_instance = AllowMemberJoiningRulePartial.from_json(json)
# print the JSON string representation of the object
print(AllowMemberJoiningRulePartial.to_json())

# convert the object into a dict
allow_member_joining_rule_partial_dict = allow_member_joining_rule_partial_instance.to_dict()
# create an instance of AllowMemberJoiningRulePartial from a dict
allow_member_joining_rule_partial_from_dict = AllowMemberJoiningRulePartial.from_dict(allow_member_joining_rule_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


