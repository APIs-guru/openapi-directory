# GoogleCloudRecaptchaenterpriseV1WebKeySettings

Settings specific to keys that can be used by websites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_all_domains** | **bool** | Optional. If set to true, it means allowed_domains will not be enforced. | [optional] 
**allow_amp_traffic** | **bool** | Optional. If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type. | [optional] 
**allowed_domains** | **List[str]** | Optional. Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: &#39;example.com&#39; or &#39;subdomain.example.com&#39; | [optional] 
**challenge_security_preference** | **str** | Optional. Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. | [optional] 
**integration_type** | **str** | Required. Describes how this key is integrated with the website. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_web_key_settings import GoogleCloudRecaptchaenterpriseV1WebKeySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1WebKeySettings from a JSON string
google_cloud_recaptchaenterprise_v1_web_key_settings_instance = GoogleCloudRecaptchaenterpriseV1WebKeySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1WebKeySettings.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_web_key_settings_dict = google_cloud_recaptchaenterprise_v1_web_key_settings_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1WebKeySettings from a dict
google_cloud_recaptchaenterprise_v1_web_key_settings_from_dict = GoogleCloudRecaptchaenterpriseV1WebKeySettings.from_dict(google_cloud_recaptchaenterprise_v1_web_key_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


