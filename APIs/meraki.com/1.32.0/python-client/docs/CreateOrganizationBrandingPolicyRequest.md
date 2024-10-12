# CreateOrganizationBrandingPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_settings** | [**GetOrganizationBrandingPolicies200ResponseInnerAdminSettings**](GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.md) |  | [optional] 
**custom_logo** | [**CreateOrganizationBrandingPolicyRequestCustomLogo**](CreateOrganizationBrandingPolicyRequestCustomLogo.md) |  | [optional] 
**enabled** | **bool** | Boolean indicating whether this policy is enabled. | [optional] 
**help_settings** | [**CreateOrganizationBrandingPolicyRequestHelpSettings**](CreateOrganizationBrandingPolicyRequestHelpSettings.md) |  | [optional] 
**name** | **str** | Name of the Dashboard branding policy. | [optional] 

## Example

```python
from openapi_client.models.create_organization_branding_policy_request import CreateOrganizationBrandingPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationBrandingPolicyRequest from a JSON string
create_organization_branding_policy_request_instance = CreateOrganizationBrandingPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationBrandingPolicyRequest.to_json())

# convert the object into a dict
create_organization_branding_policy_request_dict = create_organization_branding_policy_request_instance.to_dict()
# create an instance of CreateOrganizationBrandingPolicyRequest from a dict
create_organization_branding_policy_request_from_dict = CreateOrganizationBrandingPolicyRequest.from_dict(create_organization_branding_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


