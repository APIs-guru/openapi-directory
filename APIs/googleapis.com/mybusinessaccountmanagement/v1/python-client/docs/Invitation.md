# Invitation

Represents a pending invitation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The resource name for the invitation. &#x60;accounts/{account_id}/invitations/{invitation_id}&#x60;. | [optional] 
**role** | **str** | Output only. The invited role on the account. | [optional] [readonly] 
**target_account** | [**Account**](Account.md) |  | [optional] 
**target_location** | [**TargetLocation**](TargetLocation.md) |  | [optional] 
**target_type** | **str** | Output only. Specifies which target types should appear in the response. | [optional] [readonly] 

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


