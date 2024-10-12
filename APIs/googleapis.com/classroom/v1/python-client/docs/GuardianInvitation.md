# GuardianInvitation

An invitation to become the guardian of a specified user, sent to a specified email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | The time that this invitation was created. Read-only. | [optional] 
**invitation_id** | **str** | Unique identifier for this invitation. Read-only. | [optional] 
**invited_email_address** | **str** | Email address that the invitation was sent to. This field is only visible to domain administrators. | [optional] 
**state** | **str** | The state that this invitation is in. | [optional] 
**student_id** | **str** | ID of the student (in standard format) | [optional] 

## Example

```python
from openapi_client.models.guardian_invitation import GuardianInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of GuardianInvitation from a JSON string
guardian_invitation_instance = GuardianInvitation.from_json(json)
# print the JSON string representation of the object
print(GuardianInvitation.to_json())

# convert the object into a dict
guardian_invitation_dict = guardian_invitation_instance.to_dict()
# create an instance of GuardianInvitation from a dict
guardian_invitation_from_dict = GuardianInvitation.from_dict(guardian_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


