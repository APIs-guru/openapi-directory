# CreateOrganizationSamlRoleRequestTagsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | The privilege of the SAML administrator on the tag | 
**tag** | **str** | The name of the tag | 

## Example

```python
from openapi_client.models.create_organization_saml_role_request_tags_inner import CreateOrganizationSamlRoleRequestTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationSamlRoleRequestTagsInner from a JSON string
create_organization_saml_role_request_tags_inner_instance = CreateOrganizationSamlRoleRequestTagsInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationSamlRoleRequestTagsInner.to_json())

# convert the object into a dict
create_organization_saml_role_request_tags_inner_dict = create_organization_saml_role_request_tags_inner_instance.to_dict()
# create an instance of CreateOrganizationSamlRoleRequestTagsInner from a dict
create_organization_saml_role_request_tags_inner_from_dict = CreateOrganizationSamlRoleRequestTagsInner.from_dict(create_organization_saml_role_request_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


