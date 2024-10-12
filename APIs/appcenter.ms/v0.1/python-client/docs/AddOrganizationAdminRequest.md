# AddOrganizationAdminRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigning_reason** | **str** | The explanation for adding new org admin. | 
**issue_id** | **str** | The id of the related Intercom issue. | 
**new_org_admin_id** | **str** | The internal unique id (UUID) of the account. | 
**responsible_admin_id** | **str** | The id of the user who started adding new org admin. | 

## Example

```python
from openapi_client.models.add_organization_admin_request import AddOrganizationAdminRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrganizationAdminRequest from a JSON string
add_organization_admin_request_instance = AddOrganizationAdminRequest.from_json(json)
# print the JSON string representation of the object
print(AddOrganizationAdminRequest.to_json())

# convert the object into a dict
add_organization_admin_request_dict = add_organization_admin_request_instance.to_dict()
# create an instance of AddOrganizationAdminRequest from a dict
add_organization_admin_request_from_dict = AddOrganizationAdminRequest.from_dict(add_organization_admin_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


