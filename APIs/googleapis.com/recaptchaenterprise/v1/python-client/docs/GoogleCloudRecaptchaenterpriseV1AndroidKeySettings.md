# GoogleCloudRecaptchaenterpriseV1AndroidKeySettings

Settings specific to keys that can be used by Android apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_all_package_names** | **bool** | Optional. If set to true, allowed_package_names are not enforced. | [optional] 
**allowed_package_names** | **List[str]** | Optional. Android package names of apps allowed to use the key. Example: &#39;com.companyname.appname&#39; | [optional] 
**support_non_google_app_store_distribution** | **bool** | Optional. Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_android_key_settings import GoogleCloudRecaptchaenterpriseV1AndroidKeySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1AndroidKeySettings from a JSON string
google_cloud_recaptchaenterprise_v1_android_key_settings_instance = GoogleCloudRecaptchaenterpriseV1AndroidKeySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1AndroidKeySettings.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_android_key_settings_dict = google_cloud_recaptchaenterprise_v1_android_key_settings_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1AndroidKeySettings from a dict
google_cloud_recaptchaenterprise_v1_android_key_settings_from_dict = GoogleCloudRecaptchaenterpriseV1AndroidKeySettings.from_dict(google_cloud_recaptchaenterprise_v1_android_key_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


