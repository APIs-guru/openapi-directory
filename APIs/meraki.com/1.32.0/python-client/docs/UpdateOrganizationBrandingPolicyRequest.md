# UpdateOrganizationBrandingPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_settings** | [**GetOrganizationBrandingPolicies200ResponseInnerAdminSettings**](GetOrganizationBrandingPolicies200ResponseInnerAdminSettings.md) |  | [optional] 
**custom_logo** | [**CreateOrganizationBrandingPolicyRequestCustomLogo**](CreateOrganizationBrandingPolicyRequestCustomLogo.md) |  | [optional] 
**enabled** | **bool** | Boolean indicating whether this policy is enabled. | [optional] 
**help_settings** | [**GetOrganizationBrandingPolicies200ResponseInnerHelpSettings**](GetOrganizationBrandingPolicies200ResponseInnerHelpSettings.md) |  | [optional] 
**name** | **str** | Name of the Dashboard branding policy. | [optional] 

## Example

```python
from openapi_client.models.update_organization_branding_policy_request import UpdateOrganizationBrandingPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationBrandingPolicyRequest from a JSON string
update_organization_branding_policy_request_instance = UpdateOrganizationBrandingPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationBrandingPolicyRequest.to_json())

# convert the object into a dict
update_organization_branding_policy_request_dict = update_organization_branding_policy_request_instance.to_dict()
# create an instance of UpdateOrganizationBrandingPolicyRequest from a dict
update_organization_branding_policy_request_from_dict = UpdateOrganizationBrandingPolicyRequest.from_dict(update_organization_branding_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


