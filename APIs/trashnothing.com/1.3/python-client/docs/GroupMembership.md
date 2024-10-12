# GroupMembership

Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | The UTC date and time when the membership was last updated.  | [optional] 
**questionnaire** | [**GroupMembershipQuestionnaire**](GroupMembershipQuestionnaire.md) |  | [optional] 
**status** | **str** | One of: subscribed, pending, pending-questions  | [optional] 

## Example

```python
from openapi_client.models.group_membership import GroupMembership

# TODO update the JSON string below
json = "{}"
# create an instance of GroupMembership from a JSON string
group_membership_instance = GroupMembership.from_json(json)
# print the JSON string representation of the object
print(GroupMembership.to_json())

# convert the object into a dict
group_membership_dict = group_membership_instance.to_dict()
# create an instance of GroupMembership from a dict
group_membership_from_dict = GroupMembership.from_dict(group_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


