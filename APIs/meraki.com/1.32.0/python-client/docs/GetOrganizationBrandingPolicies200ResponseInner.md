# GetOrganizationBrandingPolicies200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_settings** | [**GetOrganizationBrandingPolicies200ResponseInnerAdminSettings**](GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.md) |  | [optional] 
**custom_logo** | [**GetOrganizationBrandingPolicies200ResponseInnerCustomLogo**](GetOrganizationBrandingPolicies200ResponseInnerCustomLogo.md) |  | [optional] 
**enabled** | **bool** | Boolean indicating whether this policy is enabled. | [optional] 
**help_settings** | [**GetOrganizationBrandingPolicies200ResponseInnerHelpSettings**](GetOrganizationBrandingPolicies200ResponseInnerHelpSettings.md) |  | [optional] 
**name** | **str** | Name of the Dashboard branding policy. | [optional] 

## Example

```python
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationBrandingPolicies200ResponseInner from a JSON string
get_organization_branding_policies200_response_inner_instance = GetOrganizationBrandingPolicies200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationBrandingPolicies200ResponseInner.to_json())

# convert the object into a dict
get_organization_branding_policies200_response_inner_dict = get_organization_branding_policies200_response_inner_instance.to_dict()
# create an instance of GetOrganizationBrandingPolicies200ResponseInner from a dict
get_organization_branding_policies200_response_inner_from_dict = GetOrganizationBrandingPolicies200ResponseInner.from_dict(get_organization_branding_policies200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


