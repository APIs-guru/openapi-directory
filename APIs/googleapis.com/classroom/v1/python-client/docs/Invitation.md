# Invitation

An invitation to join a course.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_id** | **str** | Identifier of the course to invite the user to. | [optional] 
**id** | **str** | Identifier assigned by Classroom. Read-only. | [optional] 
**role** | **str** | Role to invite the user to have. Must not be &#x60;COURSE_ROLE_UNSPECIFIED&#x60;. | [optional] 
**user_id** | **str** | Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal &#x60;\&quot;me\&quot;&#x60;, indicating the requesting user | [optional] 

## Example

```python
from openapi_client.models.invitation import Invitation

# TODO update the JSON string below
json = "{}"
# create an instance of Invitation from a JSON string
invitation_instance = Invitation.from_json(json)
# print the JSON string representation of the object
print(Invitation.to_json())

# convert the object into a dict
invitation_dict = invitation_instance.to_dict()
# create an instance of Invitation from a dict
invitation_from_dict = Invitation.from_dict(invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


