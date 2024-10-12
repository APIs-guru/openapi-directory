# GoogleCloudKmsV1CryptoKeyVersionTemplate

A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT. | [optional] 
**protection_level** | **str** | ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_v1_crypto_key_version_template import GoogleCloudKmsV1CryptoKeyVersionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsV1CryptoKeyVersionTemplate from a JSON string
google_cloud_kms_v1_crypto_key_version_template_instance = GoogleCloudKmsV1CryptoKeyVersionTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsV1CryptoKeyVersionTemplate.to_json())

# convert the object into a dict
google_cloud_kms_v1_crypto_key_version_template_dict = google_cloud_kms_v1_crypto_key_version_template_instance.to_dict()
# create an instance of GoogleCloudKmsV1CryptoKeyVersionTemplate from a dict
google_cloud_kms_v1_crypto_key_version_template_from_dict = GoogleCloudKmsV1CryptoKeyVersionTemplate.from_dict(google_cloud_kms_v1_crypto_key_version_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


