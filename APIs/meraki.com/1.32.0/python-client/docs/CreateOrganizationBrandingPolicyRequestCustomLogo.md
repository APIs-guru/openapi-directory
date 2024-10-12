# CreateOrganizationBrandingPolicyRequestCustomLogo

Properties describing the custom logo attached to the branding policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether or not there is a custom logo enabled. | [optional] 
**image** | [**CreateOrganizationBrandingPolicyRequestCustomLogoImage**](CreateOrganizationBrandingPolicyRequestCustomLogoImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_organization_branding_policy_request_custom_logo import CreateOrganizationBrandingPolicyRequestCustomLogo

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationBrandingPolicyRequestCustomLogo from a JSON string
create_organization_branding_policy_request_custom_logo_instance = CreateOrganizationBrandingPolicyRequestCustomLogo.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationBrandingPolicyRequestCustomLogo.to_json())

# convert the object into a dict
create_organization_branding_policy_request_custom_logo_dict = create_organization_branding_policy_request_custom_logo_instance.to_dict()
# create an instance of CreateOrganizationBrandingPolicyRequestCustomLogo from a dict
create_organization_branding_policy_request_custom_logo_from_dict = CreateOrganizationBrandingPolicyRequestCustomLogo.from_dict(create_organization_branding_policy_request_custom_logo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


