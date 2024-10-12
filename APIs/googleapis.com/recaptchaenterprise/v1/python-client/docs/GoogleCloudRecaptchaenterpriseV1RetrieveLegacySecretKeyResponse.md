# GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse

Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_secret_key** | **str** | The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response import GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse from a JSON string
google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response_instance = GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response_dict = google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse from a dict
google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response_from_dict = GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse.from_dict(google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


