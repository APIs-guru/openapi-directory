# GeneratedApksPerSigningKey

Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_sha256_hash** | **str** | SHA256 hash of the APK signing public key certificate. | [optional] 
**generated_asset_pack_slices** | [**List[GeneratedAssetPackSlice]**](GeneratedAssetPackSlice.md) | List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash. | [optional] 
**generated_recovery_modules** | [**List[GeneratedRecoveryApk]**](GeneratedRecoveryApk.md) | Generated recovery apks for recovery actions signed with a key corresponding to certificate_sha256_hash. This includes all generated recovery APKs, also those in draft or cancelled state. This field is not set if no recovery actions were created for this signing key. | [optional] 
**generated_split_apks** | [**List[GeneratedSplitApk]**](GeneratedSplitApk.md) | List of generated split APKs, signed with a key corresponding to certificate_sha256_hash. | [optional] 
**generated_standalone_apks** | [**List[GeneratedStandaloneApk]**](GeneratedStandaloneApk.md) | List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash. | [optional] 
**generated_universal_apk** | [**GeneratedUniversalApk**](GeneratedUniversalApk.md) |  | [optional] 
**targeting_info** | [**TargetingInfo**](TargetingInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.generated_apks_per_signing_key import GeneratedApksPerSigningKey

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedApksPerSigningKey from a JSON string
generated_apks_per_signing_key_instance = GeneratedApksPerSigningKey.from_json(json)
# print the JSON string representation of the object
print(GeneratedApksPerSigningKey.to_json())

# convert the object into a dict
generated_apks_per_signing_key_dict = generated_apks_per_signing_key_instance.to_dict()
# create an instance of GeneratedApksPerSigningKey from a dict
generated_apks_per_signing_key_from_dict = GeneratedApksPerSigningKey.from_dict(generated_apks_per_signing_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


