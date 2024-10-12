# CreateOrganizationSamlRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**networks** | [**List[CreateOrganizationSamlRoleRequestNetworksInner]**](CreateOrganizationSamlRoleRequestNetworksInner.md) | The list of networks that the SAML administrator has privileges on | [optional] 
**org_access** | **str** | The privilege of the SAML administrator on the organization. Can be one of &#39;none&#39;, &#39;read-only&#39;, &#39;full&#39; or &#39;enterprise&#39; | 
**role** | **str** | The role of the SAML administrator | 
**tags** | [**List[CreateOrganizationSamlRoleRequestTagsInner]**](CreateOrganizationSamlRoleRequestTagsInner.md) | The list of tags that the SAML administrator has privleges on | [optional] 

## Example

```python
from openapi_client.models.create_organization_saml_role_request import CreateOrganizationSamlRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationSamlRoleRequest from a JSON string
create_organization_saml_role_request_instance = CreateOrganizationSamlRoleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationSamlRoleRequest.to_json())

# convert the object into a dict
create_organization_saml_role_request_dict = create_organization_saml_role_request_instance.to_dict()
# create an instance of CreateOrganizationSamlRoleRequest from a dict
create_organization_saml_role_request_from_dict = CreateOrganizationSamlRoleRequest.from_dict(create_organization_saml_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


