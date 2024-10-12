# IsInvitableUserResponse

Response for IsInvitableUser RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_invitable_user** | **bool** | Returns true if the email address is invitable. | [optional] 

## Example

```python
from openapi_client.models.is_invitable_user_response import IsInvitableUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IsInvitableUserResponse from a JSON string
is_invitable_user_response_instance = IsInvitableUserResponse.from_json(json)
# print the JSON string representation of the object
print(IsInvitableUserResponse.to_json())

# convert the object into a dict
is_invitable_user_response_dict = is_invitable_user_response_instance.to_dict()
# create an instance of IsInvitableUserResponse from a dict
is_invitable_user_response_from_dict = IsInvitableUserResponse.from_dict(is_invitable_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


