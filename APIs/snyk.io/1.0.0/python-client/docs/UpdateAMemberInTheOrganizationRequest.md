# UpdateAMemberInTheOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The new role of the user, \&quot;admin\&quot; or \&quot;collaborator\&quot;. | [optional] 

## Example

```python
from openapi_client.models.update_a_member_in_the_organization_request import UpdateAMemberInTheOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAMemberInTheOrganizationRequest from a JSON string
update_a_member_in_the_organization_request_instance = UpdateAMemberInTheOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAMemberInTheOrganizationRequest.to_json())

# convert the object into a dict
update_a_member_in_the_organization_request_dict = update_a_member_in_the_organization_request_instance.to_dict()
# create an instance of UpdateAMemberInTheOrganizationRequest from a dict
update_a_member_in_the_organization_request_from_dict = UpdateAMemberInTheOrganizationRequest.from_dict(update_a_member_in_the_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


