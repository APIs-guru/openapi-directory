# AppInvitationsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppsList200ResponseInner**](AppsList200ResponseInner.md) |  | 
**app_count** | **float** | The number of apps in the group | [optional] 
**distribution_group** | [**AppInvitationsList200ResponseDistributionGroup**](AppInvitationsList200ResponseDistributionGroup.md) |  | [optional] 
**email** | **str** | The email address of the invited user | 
**id** | **str** | The unique ID (UUID) of the invitation | 
**invite_type** | **str** | The invitation type | 
**invited_by** | [**AppInvitationsList200ResponseInvitedBy**](AppInvitationsList200ResponseInvitedBy.md) |  | 
**is_existing_user** | **bool** | Indicates whether the invited user already exists | 
**permissions** | **List[str]** | The permissions the user has for the app | [optional] 

## Example

```python
from openapi_client.models.app_invitations_list200_response import AppInvitationsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppInvitationsList200Response from a JSON string
app_invitations_list200_response_instance = AppInvitationsList200Response.from_json(json)
# print the JSON string representation of the object
print(AppInvitationsList200Response.to_json())

# convert the object into a dict
app_invitations_list200_response_dict = app_invitations_list200_response_instance.to_dict()
# create an instance of AppInvitationsList200Response from a dict
app_invitations_list200_response_from_dict = AppInvitationsList200Response.from_dict(app_invitations_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


