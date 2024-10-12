# GoogleCloudRecaptchaenterpriseV1Key

A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_settings** | [**GoogleCloudRecaptchaenterpriseV1AndroidKeySettings**](GoogleCloudRecaptchaenterpriseV1AndroidKeySettings.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp corresponding to the creation of this key. | [optional] [readonly] 
**display_name** | **str** | Required. Human-readable display name of this key. Modifiable by user. | [optional] 
**ios_settings** | [**GoogleCloudRecaptchaenterpriseV1IOSKeySettings**](GoogleCloudRecaptchaenterpriseV1IOSKeySettings.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. See [Creating and managing labels] (https://cloud.google.com/recaptcha-enterprise/docs/labels). | [optional] 
**name** | **str** | Identifier. The resource name for the Key in the format &#x60;projects/{project}/keys/{key}&#x60;. | [optional] 
**testing_options** | [**GoogleCloudRecaptchaenterpriseV1TestingOptions**](GoogleCloudRecaptchaenterpriseV1TestingOptions.md) |  | [optional] 
**waf_settings** | [**GoogleCloudRecaptchaenterpriseV1WafSettings**](GoogleCloudRecaptchaenterpriseV1WafSettings.md) |  | [optional] 
**web_settings** | [**GoogleCloudRecaptchaenterpriseV1WebKeySettings**](GoogleCloudRecaptchaenterpriseV1WebKeySettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_key import GoogleCloudRecaptchaenterpriseV1Key

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1Key from a JSON string
google_cloud_recaptchaenterprise_v1_key_instance = GoogleCloudRecaptchaenterpriseV1Key.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1Key.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_key_dict = google_cloud_recaptchaenterprise_v1_key_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1Key from a dict
google_cloud_recaptchaenterprise_v1_key_from_dict = GoogleCloudRecaptchaenterpriseV1Key.from_dict(google_cloud_recaptchaenterprise_v1_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


