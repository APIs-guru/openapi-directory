# GetOrganizationBrandingPolicies200ResponseInnerAdminSettings

Settings for describing which kinds of admins this policy applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applies_to** | **str** | Which kinds of admins this policy applies to. Can be one of &#39;All organization admins&#39;, &#39;All enterprise admins&#39;, &#39;All network admins&#39;, &#39;All admins of networks...&#39;, &#39;All admins of networks tagged...&#39;, &#39;Specific admins...&#39;, &#39;All admins&#39; or &#39;All SAML admins&#39;. | [optional] 
**values** | **List[str]** |       If &#39;appliesTo&#39; is set to one of &#39;Specific admins...&#39;, &#39;All admins of networks...&#39; or &#39;All admins of networks tagged...&#39;, then you must specify this &#39;values&#39; property to provide the set of       entities to apply the branding policy to. For &#39;Specific admins...&#39;, specify an array of admin IDs. For &#39;All admins of       networks...&#39;, specify an array of network IDs and/or configuration template IDs. For &#39;All admins of networks tagged...&#39;,       specify an array of tag names.  | [optional] 

## Example

```python
from openapi_client.models.get_organization_branding_policies200_response_inner_admin_settings import GetOrganizationBrandingPolicies200ResponseInnerAdminSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationBrandingPolicies200ResponseInnerAdminSettings from a JSON string
get_organization_branding_policies200_response_inner_admin_settings_instance = GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.to_json())

# convert the object into a dict
get_organization_branding_policies200_response_inner_admin_settings_dict = get_organization_branding_policies200_response_inner_admin_settings_instance.to_dict()
# create an instance of GetOrganizationBrandingPolicies200ResponseInnerAdminSettings from a dict
get_organization_branding_policies200_response_inner_admin_settings_from_dict = GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.from_dict(get_organization_branding_policies200_response_inner_admin_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


