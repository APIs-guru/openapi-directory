# InvitationsSent200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppsList200ResponseInner**](AppsList200ResponseInner.md) |  | [optional] 
**invitation_id** | **str** | The id of the invitation | 
**organization** | [**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md) |  | [optional] 

## Example

```python
from openapi_client.models.invitations_sent200_response_inner import InvitationsSent200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of InvitationsSent200ResponseInner from a JSON string
invitations_sent200_response_inner_instance = InvitationsSent200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(InvitationsSent200ResponseInner.to_json())

# convert the object into a dict
invitations_sent200_response_inner_dict = invitations_sent200_response_inner_instance.to_dict()
# create an instance of InvitationsSent200ResponseInner from a dict
invitations_sent200_response_inner_from_dict = InvitationsSent200ResponseInner.from_dict(invitations_sent200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


