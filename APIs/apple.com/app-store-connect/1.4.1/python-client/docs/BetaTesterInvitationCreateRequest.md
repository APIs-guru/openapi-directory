# BetaTesterInvitationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaTesterInvitationCreateRequestData**](BetaTesterInvitationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_tester_invitation_create_request import BetaTesterInvitationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterInvitationCreateRequest from a JSON string
beta_tester_invitation_create_request_instance = BetaTesterInvitationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaTesterInvitationCreateRequest.to_json())

# convert the object into a dict
beta_tester_invitation_create_request_dict = beta_tester_invitation_create_request_instance.to_dict()
# create an instance of BetaTesterInvitationCreateRequest from a dict
beta_tester_invitation_create_request_from_dict = BetaTesterInvitationCreateRequest.from_dict(beta_tester_invitation_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


