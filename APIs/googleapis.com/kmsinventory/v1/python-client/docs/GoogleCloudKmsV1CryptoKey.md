# GoogleCloudKmsV1CryptoKey

A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which this CryptoKey was created. | [optional] [readonly] 
**crypto_key_backend** | **str** | Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format &#x60;projects/*/locations/*/ekmConnections/*&#x60;. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future. | [optional] 
**destroy_scheduled_duration** | **str** | Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours. | [optional] 
**import_only** | **bool** | Immutable. Whether this key may contain imported versions only. | [optional] 
**labels** | **Dict[str, str]** | Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys). | [optional] 
**name** | **str** | Output only. The resource name for this CryptoKey in the format &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. | [optional] [readonly] 
**next_rotation_time** | **str** | At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. | [optional] 
**primary** | [**GoogleCloudKmsV1CryptoKeyVersion**](GoogleCloudKmsV1CryptoKeyVersion.md) |  | [optional] 
**purpose** | **str** | Immutable. The immutable purpose of this CryptoKey. | [optional] 
**rotation_period** | **str** | next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted. | [optional] 
**version_template** | [**GoogleCloudKmsV1CryptoKeyVersionTemplate**](GoogleCloudKmsV1CryptoKeyVersionTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_v1_crypto_key import GoogleCloudKmsV1CryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsV1CryptoKey from a JSON string
google_cloud_kms_v1_crypto_key_instance = GoogleCloudKmsV1CryptoKey.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsV1CryptoKey.to_json())

# convert the object into a dict
google_cloud_kms_v1_crypto_key_dict = google_cloud_kms_v1_crypto_key_instance.to_dict()
# create an instance of GoogleCloudKmsV1CryptoKey from a dict
google_cloud_kms_v1_crypto_key_from_dict = GoogleCloudKmsV1CryptoKey.from_dict(google_cloud_kms_v1_crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


