# GoogleCloudKmsV1CryptoKeyVersion

A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports. | [optional] [readonly] 
**attestation** | [**GoogleCloudKmsV1KeyOperationAttestation**](GoogleCloudKmsV1KeyOperationAttestation.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this CryptoKeyVersion was created. | [optional] [readonly] 
**destroy_event_time** | **str** | Output only. The time this CryptoKeyVersion&#39;s key material was destroyed. Only present if state is DESTROYED. | [optional] [readonly] 
**destroy_time** | **str** | Output only. The time this CryptoKeyVersion&#39;s key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED. | [optional] [readonly] 
**external_destruction_failure_reason** | **str** | Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED. | [optional] [readonly] 
**external_protection_level_options** | [**GoogleCloudKmsV1ExternalProtectionLevelOptions**](GoogleCloudKmsV1ExternalProtectionLevelOptions.md) |  | [optional] 
**generate_time** | **str** | Output only. The time this CryptoKeyVersion&#39;s key material was generated. | [optional] [readonly] 
**generation_failure_reason** | **str** | Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED. | [optional] [readonly] 
**import_failure_reason** | **str** | Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED. | [optional] [readonly] 
**import_job** | **str** | Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported. | [optional] [readonly] 
**import_time** | **str** | Output only. The time at which this CryptoKeyVersion&#39;s key material was most recently imported. | [optional] [readonly] 
**name** | **str** | Output only. The resource name for this CryptoKeyVersion in the format &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*&#x60;. | [optional] [readonly] 
**protection_level** | **str** | Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion. | [optional] [readonly] 
**reimport_eligible** | **bool** | Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version. | [optional] [readonly] 
**state** | **str** | The current state of the CryptoKeyVersion. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_v1_crypto_key_version import GoogleCloudKmsV1CryptoKeyVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsV1CryptoKeyVersion from a JSON string
google_cloud_kms_v1_crypto_key_version_instance = GoogleCloudKmsV1CryptoKeyVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsV1CryptoKeyVersion.to_json())

# convert the object into a dict
google_cloud_kms_v1_crypto_key_version_dict = google_cloud_kms_v1_crypto_key_version_instance.to_dict()
# create an instance of GoogleCloudKmsV1CryptoKeyVersion from a dict
google_cloud_kms_v1_crypto_key_version_from_dict = GoogleCloudKmsV1CryptoKeyVersion.from_dict(google_cloud_kms_v1_crypto_key_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


