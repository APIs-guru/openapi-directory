# ImportCryptoKeyVersionRequest

Request message for KeyManagementService.ImportCryptoKeyVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into. | [optional] 
**crypto_key_version** | **str** | Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material. | [optional] 
**import_job** | **str** | Required. The name of the ImportJob that was used to wrap this key material. | [optional] 
**rsa_aes_wrapped_key** | **bytearray** | Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified. | [optional] 
**wrapped_key** | **bytearray** | Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label. | [optional] 

## Example

```python
from openapi_client.models.import_crypto_key_version_request import ImportCryptoKeyVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportCryptoKeyVersionRequest from a JSON string
import_crypto_key_version_request_instance = ImportCryptoKeyVersionRequest.from_json(json)
# print the JSON string representation of the object
print(ImportCryptoKeyVersionRequest.to_json())

# convert the object into a dict
import_crypto_key_version_request_dict = import_crypto_key_version_request_instance.to_dict()
# create an instance of ImportCryptoKeyVersionRequest from a dict
import_crypto_key_version_request_from_dict = ImportCryptoKeyVersionRequest.from_dict(import_crypto_key_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


