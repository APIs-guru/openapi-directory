# KeyVersionSpec

A Cloud KMS key configuration that a CertificateAuthority will use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as &#x60;HSM&#x60;. | [optional] 
**cloud_kms_key_version** | **str** | The resource name for an existing Cloud KMS CryptoKeyVersion in the format &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*&#x60;. This option enables full flexibility in the key&#39;s capabilities and properties. | [optional] 

## Example

```python
from openapi_client.models.key_version_spec import KeyVersionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVersionSpec from a JSON string
key_version_spec_instance = KeyVersionSpec.from_json(json)
# print the JSON string representation of the object
print(KeyVersionSpec.to_json())

# convert the object into a dict
key_version_spec_dict = key_version_spec_instance.to_dict()
# create an instance of KeyVersionSpec from a dict
key_version_spec_from_dict = KeyVersionSpec.from_dict(key_version_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


