# UpdateOrganizationSamlRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networks** | [**List[CreateOrganizationSamlRoleRequestNetworksInner]**](CreateOrganizationSamlRoleRequestNetworksInner.md) | The list of networks that the SAML administrator has privileges on | [optional] 
**org_access** | **str** | The privilege of the SAML administrator on the organization | [optional] 
**role** | **str** | The role of the SAML administrator | [optional] 
**tags** | [**List[CreateOrganizationSamlRoleRequestTagsInner]**](CreateOrganizationSamlRoleRequestTagsInner.md) | The list of tags that the SAML administrator has privleges on | [optional] 

## Example

```python
from openapi_client.models.update_organization_saml_role_request import UpdateOrganizationSamlRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSamlRoleRequest from a JSON string
update_organization_saml_role_request_instance = UpdateOrganizationSamlRoleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSamlRoleRequest.to_json())

# convert the object into a dict
update_organization_saml_role_request_dict = update_organization_saml_role_request_instance.to_dict()
# create an instance of UpdateOrganizationSamlRoleRequest from a dict
update_organization_saml_role_request_from_dict = UpdateOrganizationSamlRoleRequest.from_dict(update_organization_saml_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


