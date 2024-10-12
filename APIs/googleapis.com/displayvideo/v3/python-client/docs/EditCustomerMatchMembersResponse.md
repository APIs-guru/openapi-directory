# EditCustomerMatchMembersResponse

The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_and_third_party_audience_id** | **str** | Required. The ID of the updated Customer Match FirstAndThirdPartyAudience. | [optional] 

## Example

```python
from openapi_client.models.edit_customer_match_members_response import EditCustomerMatchMembersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EditCustomerMatchMembersResponse from a JSON string
edit_customer_match_members_response_instance = EditCustomerMatchMembersResponse.from_json(json)
# print the JSON string representation of the object
print(EditCustomerMatchMembersResponse.to_json())

# convert the object into a dict
edit_customer_match_members_response_dict = edit_customer_match_members_response_instance.to_dict()
# create an instance of EditCustomerMatchMembersResponse from a dict
edit_customer_match_members_response_from_dict = EditCustomerMatchMembersResponse.from_dict(edit_customer_match_members_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


