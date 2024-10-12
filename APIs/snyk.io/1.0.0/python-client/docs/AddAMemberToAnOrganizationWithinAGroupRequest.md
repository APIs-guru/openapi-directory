# AddAMemberToAnOrganizationWithinAGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The role of the user, \&quot;admin\&quot; or \&quot;collaborator\&quot;. | [optional] 
**user_id** | **str** | The id of the user. | [optional] 

## Example

```python
from openapi_client.models.add_a_member_to_an_organization_within_a_group_request import AddAMemberToAnOrganizationWithinAGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddAMemberToAnOrganizationWithinAGroupRequest from a JSON string
add_a_member_to_an_organization_within_a_group_request_instance = AddAMemberToAnOrganizationWithinAGroupRequest.from_json(json)
# print the JSON string representation of the object
print(AddAMemberToAnOrganizationWithinAGroupRequest.to_json())

# convert the object into a dict
add_a_member_to_an_organization_within_a_group_request_dict = add_a_member_to_an_organization_within_a_group_request_instance.to_dict()
# create an instance of AddAMemberToAnOrganizationWithinAGroupRequest from a dict
add_a_member_to_an_organization_within_a_group_request_from_dict = AddAMemberToAnOrganizationWithinAGroupRequest.from_dict(add_a_member_to_an_organization_within_a_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


