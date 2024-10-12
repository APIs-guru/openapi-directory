# GetOrganizationBrandingPolicies200ResponseInnerCustomLogo

Properties describing the custom logo attached to the branding policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether or not there is a custom logo enabled. | [optional] 
**image** | [**GetOrganizationBrandingPolicies200ResponseInnerCustomLogoImage**](GetOrganizationBrandingPolicies200ResponseInnerCustomLogoImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_branding_policies200_response_inner_custom_logo import GetOrganizationBrandingPolicies200ResponseInnerCustomLogo

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationBrandingPolicies200ResponseInnerCustomLogo from a JSON string
get_organization_branding_policies200_response_inner_custom_logo_instance = GetOrganizationBrandingPolicies200ResponseInnerCustomLogo.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationBrandingPolicies200ResponseInnerCustomLogo.to_json())

# convert the object into a dict
get_organization_branding_policies200_response_inner_custom_logo_dict = get_organization_branding_policies200_response_inner_custom_logo_instance.to_dict()
# create an instance of GetOrganizationBrandingPolicies200ResponseInnerCustomLogo from a dict
get_organization_branding_policies200_response_inner_custom_logo_from_dict = GetOrganizationBrandingPolicies200ResponseInnerCustomLogo.from_dict(get_organization_branding_policies200_response_inner_custom_logo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


