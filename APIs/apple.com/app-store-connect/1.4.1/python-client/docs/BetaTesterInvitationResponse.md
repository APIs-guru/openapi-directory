# BetaTesterInvitationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaTesterInvitation**](BetaTesterInvitation.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_tester_invitation_response import BetaTesterInvitationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterInvitationResponse from a JSON string
beta_tester_invitation_response_instance = BetaTesterInvitationResponse.from_json(json)
# print the JSON string representation of the object
print(BetaTesterInvitationResponse.to_json())

# convert the object into a dict
beta_tester_invitation_response_dict = beta_tester_invitation_response_instance.to_dict()
# create an instance of BetaTesterInvitationResponse from a dict
beta_tester_invitation_response_from_dict = BetaTesterInvitationResponse.from_dict(beta_tester_invitation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


