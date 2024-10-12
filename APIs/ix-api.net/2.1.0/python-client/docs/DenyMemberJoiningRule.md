# DenyMemberJoiningRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account to which access to the network service should be granted or denied.  | 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 
**network_service** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.deny_member_joining_rule import DenyMemberJoiningRule

# TODO update the JSON string below
json = "{}"
# create an instance of DenyMemberJoiningRule from a JSON string
deny_member_joining_rule_instance = DenyMemberJoiningRule.from_json(json)
# print the JSON string representation of the object
print(DenyMemberJoiningRule.to_json())

# convert the object into a dict
deny_member_joining_rule_dict = deny_member_joining_rule_instance.to_dict()
# create an instance of DenyMemberJoiningRule from a dict
deny_member_joining_rule_from_dict = DenyMemberJoiningRule.from_dict(deny_member_joining_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


