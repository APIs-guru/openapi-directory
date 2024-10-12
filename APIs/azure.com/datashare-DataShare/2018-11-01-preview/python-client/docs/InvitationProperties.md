# InvitationProperties

Invitation property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation_id** | **str** | unique invitation id | [optional] [readonly] 
**invitation_status** | **str** | The status of the invitation. | [optional] [readonly] 
**responded_at** | **datetime** | The time the recipient responded to the invitation. | [optional] [readonly] 
**sent_at** | **datetime** | Gets the time at which the invitation was sent. | [optional] [readonly] 
**target_active_directory_id** | **str** | The target Azure AD Id. Can&#39;t be combined with email. | [optional] 
**target_email** | **str** | The email the invitation is directed to. | [optional] 
**target_object_id** | **str** | The target user or application Id that invitation is being sent to.  Must be specified along TargetActiveDirectoryId. This enables sending  invitations to specific users or applications in an AD tenant. | [optional] 
**user_email** | **str** | Email of the user who created the resource | [optional] [readonly] 
**user_name** | **str** | Name of the user who created the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.invitation_properties import InvitationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationProperties from a JSON string
invitation_properties_instance = InvitationProperties.from_json(json)
# print the JSON string representation of the object
print(InvitationProperties.to_json())

# convert the object into a dict
invitation_properties_dict = invitation_properties_instance.to_dict()
# create an instance of InvitationProperties from a dict
invitation_properties_from_dict = InvitationProperties.from_dict(invitation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


