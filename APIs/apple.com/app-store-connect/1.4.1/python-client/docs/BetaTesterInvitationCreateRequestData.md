# BetaTesterInvitationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relationships** | [**BetaTesterInvitationCreateRequestDataRelationships**](BetaTesterInvitationCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_tester_invitation_create_request_data import BetaTesterInvitationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterInvitationCreateRequestData from a JSON string
beta_tester_invitation_create_request_data_instance = BetaTesterInvitationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaTesterInvitationCreateRequestData.to_json())

# convert the object into a dict
beta_tester_invitation_create_request_data_dict = beta_tester_invitation_create_request_data_instance.to_dict()
# create an instance of BetaTesterInvitationCreateRequestData from a dict
beta_tester_invitation_create_request_data_from_dict = BetaTesterInvitationCreateRequestData.from_dict(beta_tester_invitation_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


