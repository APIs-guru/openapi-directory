# BetaTesterInvitationCreateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**AppPreOrderCreateRequestDataRelationshipsApp**](AppPreOrderCreateRequestDataRelationshipsApp.md) |  | 
**beta_tester** | [**BetaTesterInvitationCreateRequestDataRelationshipsBetaTester**](BetaTesterInvitationCreateRequestDataRelationshipsBetaTester.md) |  | 

## Example

```python
from openapi_client.models.beta_tester_invitation_create_request_data_relationships import BetaTesterInvitationCreateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterInvitationCreateRequestDataRelationships from a JSON string
beta_tester_invitation_create_request_data_relationships_instance = BetaTesterInvitationCreateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(BetaTesterInvitationCreateRequestDataRelationships.to_json())

# convert the object into a dict
beta_tester_invitation_create_request_data_relationships_dict = beta_tester_invitation_create_request_data_relationships_instance.to_dict()
# create an instance of BetaTesterInvitationCreateRequestDataRelationships from a dict
beta_tester_invitation_create_request_data_relationships_from_dict = BetaTesterInvitationCreateRequestDataRelationships.from_dict(beta_tester_invitation_create_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


