# UpdateOrganizationSamlRole200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID associated with the SAML role | [optional] 
**networks** | [**List[UpdateOrganizationSamlRole200ResponseNetworksInner]**](UpdateOrganizationSamlRole200ResponseNetworksInner.md) | The list of networks that the SAML administrator has privileges on | [optional] 
**org_access** | **str** | The privilege of the SAML administrator on the organization | [optional] 
**role** | **str** | The role of the SAML administrator | [optional] 
**tags** | [**List[UpdateOrganizationSamlRole200ResponseTagsInner]**](UpdateOrganizationSamlRole200ResponseTagsInner.md) | The list of tags that the SAML administrator has privleges on | [optional] 

## Example

```python
from openapi_client.models.update_organization_saml_role200_response import UpdateOrganizationSamlRole200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationSamlRole200Response from a JSON string
update_organization_saml_role200_response_instance = UpdateOrganizationSamlRole200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationSamlRole200Response.to_json())

# convert the object into a dict
update_organization_saml_role200_response_dict = update_organization_saml_role200_response_instance.to_dict()
# create an instance of UpdateOrganizationSamlRole200Response from a dict
update_organization_saml_role200_response_from_dict = UpdateOrganizationSamlRole200Response.from_dict(update_organization_saml_role200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


