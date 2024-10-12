# UserInvitation

The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mails_sent_count** | **str** | Number of invitation emails sent to the user. | [optional] 
**name** | **str** | Shall be of the form &#x60;customers/{customer}/userinvitations/{user_email_address}&#x60;. | [optional] 
**state** | **str** | State of the &#x60;UserInvitation&#x60;. | [optional] 
**update_time** | **str** | Time when the &#x60;UserInvitation&#x60; was last updated. | [optional] 

## Example

```python
from openapi_client.models.user_invitation import UserInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitation from a JSON string
user_invitation_instance = UserInvitation.from_json(json)
# print the JSON string representation of the object
print(UserInvitation.to_json())

# convert the object into a dict
user_invitation_dict = user_invitation_instance.to_dict()
# create an instance of UserInvitation from a dict
user_invitation_from_dict = UserInvitation.from_dict(user_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


