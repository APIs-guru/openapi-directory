# GroupMembershipQuestionnaire

Membership questionnaire data.  Will be null unless the membership status is pending-questions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | A message from the group moderators to be displayed above the questions (may be null). | [optional] 
**questions** | **List[str]** | The list of questions. | [optional] 

## Example

```python
from openapi_client.models.group_membership_questionnaire import GroupMembershipQuestionnaire

# TODO update the JSON string below
json = "{}"
# create an instance of GroupMembershipQuestionnaire from a JSON string
group_membership_questionnaire_instance = GroupMembershipQuestionnaire.from_json(json)
# print the JSON string representation of the object
print(GroupMembershipQuestionnaire.to_json())

# convert the object into a dict
group_membership_questionnaire_dict = group_membership_questionnaire_instance.to_dict()
# create an instance of GroupMembershipQuestionnaire from a dict
group_membership_questionnaire_from_dict = GroupMembershipQuestionnaire.from_dict(group_membership_questionnaire_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


