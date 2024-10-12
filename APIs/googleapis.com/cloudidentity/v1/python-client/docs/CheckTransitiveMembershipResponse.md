# CheckTransitiveMembershipResponse

The response message for MembershipsService.CheckTransitiveMembership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_membership** | **bool** | Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths. | [optional] 

## Example

```python
from openapi_client.models.check_transitive_membership_response import CheckTransitiveMembershipResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckTransitiveMembershipResponse from a JSON string
check_transitive_membership_response_instance = CheckTransitiveMembershipResponse.from_json(json)
# print the JSON string representation of the object
print(CheckTransitiveMembershipResponse.to_json())

# convert the object into a dict
check_transitive_membership_response_dict = check_transitive_membership_response_instance.to_dict()
# create an instance of CheckTransitiveMembershipResponse from a dict
check_transitive_membership_response_from_dict = CheckTransitiveMembershipResponse.from_dict(check_transitive_membership_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


