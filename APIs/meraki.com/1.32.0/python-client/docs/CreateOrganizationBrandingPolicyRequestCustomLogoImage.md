# CreateOrganizationBrandingPolicyRequestCustomLogoImage

Properties for setting the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The file contents (a base 64 encoded string) of your new logo. | [optional] 
**format** | **str** | The format of the encoded contents.  Supported formats are &#39;png&#39;, &#39;gif&#39;, and jpg&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_organization_branding_policy_request_custom_logo_image import CreateOrganizationBrandingPolicyRequestCustomLogoImage

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationBrandingPolicyRequestCustomLogoImage from a JSON string
create_organization_branding_policy_request_custom_logo_image_instance = CreateOrganizationBrandingPolicyRequestCustomLogoImage.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationBrandingPolicyRequestCustomLogoImage.to_json())

# convert the object into a dict
create_organization_branding_policy_request_custom_logo_image_dict = create_organization_branding_policy_request_custom_logo_image_instance.to_dict()
# create an instance of CreateOrganizationBrandingPolicyRequestCustomLogoImage from a dict
create_organization_branding_policy_request_custom_logo_image_from_dict = CreateOrganizationBrandingPolicyRequestCustomLogoImage.from_dict(create_organization_branding_policy_request_custom_logo_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


