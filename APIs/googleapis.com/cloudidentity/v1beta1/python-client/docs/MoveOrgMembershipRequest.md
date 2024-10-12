# MoveOrgMembershipRequest

The request message for OrgMembershipsService.MoveOrgMembership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where &#x60;$customerId&#x60; is the &#x60;id&#x60; from the [Admin SDK &#x60;Customer&#x60; resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use &#x60;customers/my_customer&#x60; to specify your own organization. | [optional] 
**destination_org_unit** | **str** | Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where &#x60;$orgUnitId&#x60; is the &#x60;orgUnitId&#x60; from the [Admin SDK &#x60;OrgUnit&#x60; resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). | [optional] 

## Example

```python
from openapi_client.models.move_org_membership_request import MoveOrgMembershipRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveOrgMembershipRequest from a JSON string
move_org_membership_request_instance = MoveOrgMembershipRequest.from_json(json)
# print the JSON string representation of the object
print(MoveOrgMembershipRequest.to_json())

# convert the object into a dict
move_org_membership_request_dict = move_org_membership_request_instance.to_dict()
# create an instance of MoveOrgMembershipRequest from a dict
move_org_membership_request_from_dict = MoveOrgMembershipRequest.from_dict(move_org_membership_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


