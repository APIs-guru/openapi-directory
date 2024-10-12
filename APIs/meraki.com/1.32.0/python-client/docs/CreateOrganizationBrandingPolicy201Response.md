# CreateOrganizationBrandingPolicy201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_settings** | [**GetOrganizationBrandingPolicies200ResponseInnerAdminSettings**](GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.md) |  | [optional] 
**custom_logo** | [**GetOrganizationBrandingPolicies200ResponseInnerCustomLogo**](GetOrganizationBrandingPolicies200ResponseInnerCustomLogo.md) |  | [optional] 
**enabled** | **bool** | Boolean indicating whether this policy is enabled. | [optional] 
**help_settings** | [**CreateOrganizationBrandingPolicyRequestHelpSettings**](CreateOrganizationBrandingPolicyRequestHelpSettings.md) |  | [optional] 
**name** | **str** | Name of the Dashboard branding policy. | [optional] 

## Example

```python
from openapi_client.models.create_organization_branding_policy201_response import CreateOrganizationBrandingPolicy201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationBrandingPolicy201Response from a JSON string
create_organization_branding_policy201_response_instance = CreateOrganizationBrandingPolicy201Response.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationBrandingPolicy201Response.to_json())

# convert the object into a dict
create_organization_branding_policy201_response_dict = create_organization_branding_policy201_response_instance.to_dict()
# create an instance of CreateOrganizationBrandingPolicy201Response from a dict
create_organization_branding_policy201_response_from_dict = CreateOrganizationBrandingPolicy201Response.from_dict(create_organization_branding_policy201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


