# GoogleCloudIdentitytoolkitAdminV2RecaptchaKey

The reCAPTCHA key config. reCAPTCHA Enterprise offers different keys for different client platforms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The reCAPTCHA Enterprise key resource name, e.g. \&quot;projects/{project}/keys/{key}\&quot; | [optional] 
**type** | **str** | The client&#39;s platform type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_recaptcha_key import GoogleCloudIdentitytoolkitAdminV2RecaptchaKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2RecaptchaKey from a JSON string
google_cloud_identitytoolkit_admin_v2_recaptcha_key_instance = GoogleCloudIdentitytoolkitAdminV2RecaptchaKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2RecaptchaKey.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_recaptcha_key_dict = google_cloud_identitytoolkit_admin_v2_recaptcha_key_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2RecaptchaKey from a dict
google_cloud_identitytoolkit_admin_v2_recaptcha_key_from_dict = GoogleCloudIdentitytoolkitAdminV2RecaptchaKey.from_dict(google_cloud_identitytoolkit_admin_v2_recaptcha_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


