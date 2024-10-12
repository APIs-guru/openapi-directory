# GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification

Private password leak verification info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_leak_match_prefixes** | **List[bytearray]** | Output only. List of prefixes of the encrypted potential password leaks that matched the given parameters. They must be compared with the client-side decryption prefix of &#x60;reencrypted_user_credentials_hash&#x60; | [optional] [readonly] 
**encrypted_user_credentials_hash** | **bytearray** | Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through &#x60;reencrypted_user_credentials_hash&#x60;. | [optional] 
**lookup_hash_prefix** | **bytearray** | Required. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix. | [optional] 
**reencrypted_user_credentials_hash** | **bytearray** | Output only. Corresponds to the re-encryption of the &#x60;encrypted_user_credentials_hash&#x60; field. It is used to match potential password leaks within &#x60;encrypted_leak_match_prefixes&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_private_password_leak_verification import GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification from a JSON string
google_cloud_recaptchaenterprise_v1_private_password_leak_verification_instance = GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_private_password_leak_verification_dict = google_cloud_recaptchaenterprise_v1_private_password_leak_verification_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification from a dict
google_cloud_recaptchaenterprise_v1_private_password_leak_verification_from_dict = GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification.from_dict(google_cloud_recaptchaenterprise_v1_private_password_leak_verification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


