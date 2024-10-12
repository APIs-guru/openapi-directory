# GoogleCloudKmsV1ExternalProtectionLevelOptions

ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ekm_connection_key_path** | **str** | The path to the external key material on the EKM when using EkmConnection e.g., \&quot;v0/my/key\&quot;. Set this field instead of external_key_uri when using an EkmConnection. | [optional] 
**external_key_uri** | **str** | The URI for an external resource that this CryptoKeyVersion represents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_v1_external_protection_level_options import GoogleCloudKmsV1ExternalProtectionLevelOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsV1ExternalProtectionLevelOptions from a JSON string
google_cloud_kms_v1_external_protection_level_options_instance = GoogleCloudKmsV1ExternalProtectionLevelOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsV1ExternalProtectionLevelOptions.to_json())

# convert the object into a dict
google_cloud_kms_v1_external_protection_level_options_dict = google_cloud_kms_v1_external_protection_level_options_instance.to_dict()
# create an instance of GoogleCloudKmsV1ExternalProtectionLevelOptions from a dict
google_cloud_kms_v1_external_protection_level_options_from_dict = GoogleCloudKmsV1ExternalProtectionLevelOptions.from_dict(google_cloud_kms_v1_external_protection_level_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


