# GoogleCloudRecaptchaenterpriseV1IOSKeySettings

Settings specific to keys that can be used by iOS apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_all_bundle_ids** | **bool** | Optional. If set to true, allowed_bundle_ids are not enforced. | [optional] 
**allowed_bundle_ids** | **List[str]** | Optional. iOS bundle ids of apps allowed to use the key. Example: &#39;com.companyname.productname.appname&#39; | [optional] 
**apple_developer_id** | [**GoogleCloudRecaptchaenterpriseV1AppleDeveloperId**](GoogleCloudRecaptchaenterpriseV1AppleDeveloperId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_ios_key_settings import GoogleCloudRecaptchaenterpriseV1IOSKeySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1IOSKeySettings from a JSON string
google_cloud_recaptchaenterprise_v1_ios_key_settings_instance = GoogleCloudRecaptchaenterpriseV1IOSKeySettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1IOSKeySettings.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_ios_key_settings_dict = google_cloud_recaptchaenterprise_v1_ios_key_settings_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1IOSKeySettings from a dict
google_cloud_recaptchaenterprise_v1_ios_key_settings_from_dict = GoogleCloudRecaptchaenterpriseV1IOSKeySettings.from_dict(google_cloud_recaptchaenterprise_v1_ios_key_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


