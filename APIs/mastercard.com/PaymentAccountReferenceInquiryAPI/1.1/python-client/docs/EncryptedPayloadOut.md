# EncryptedPayloadOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_data** | **str** | Contains an encrypted JSON object. Encrypted by the ephemeral AES key using CBC mode (IV as provided in &#39;iv&#39;, or zero if none provided) and PKCS#7 padding. The JSON object being encrypted will be defined in the context of the API call. Max length - 256k.  Type - String Hex-encoded Data (case-insensitive). Required - Yes. | 
**encrypted_key** | **str** | One-time use AES key encrypted by the MasterCard public key (as identified by &#39;publicKeyFingerprint&#39;) using the OAEP or RSA Encryption Standard PKCS 1 v1.5 (depending on the value of &#39;oaepHashingAlgorithm&#39;). Requirement is for a 128-bit key (with 256-bit key supported as an option). Data Type - String. Hex-encoded data (case-insensitive). Max Length - 512. Required - Yes. | 
**iv** | **str** | The initialization vector used when encrypting data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. If not present, an IV of zero is assumed. Length - 32 exactly. Type - String Hex-encoded Data (case-insensitive). Optional. | [optional] 
**oaep_hashing_algorithm** | **str** | Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS 1 v1.5 will be used. You must use one of the following algorithms; SHA256 - Use the SHA-256 algorithm | SHA512 - Use the SHA-512 algorithm.  Max length - 6. Type - String. Optional. | [optional] 
**public_key_fingerprint** | **str** | The fingerprint of the public key used to encrypt the ephemeral AES key. &lt;br&gt;&lt;br&gt; __Max length:__ 64  __Type:__ String Hex-encoded Data (case-insensitive)&lt;br&gt;&lt;br&gt;  | 

## Example

```python
from openapi_client.models.encrypted_payload_out import EncryptedPayloadOut

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptedPayloadOut from a JSON string
encrypted_payload_out_instance = EncryptedPayloadOut.from_json(json)
# print the JSON string representation of the object
print(EncryptedPayloadOut.to_json())

# convert the object into a dict
encrypted_payload_out_dict = encrypted_payload_out_instance.to_dict()
# create an instance of EncryptedPayloadOut from a dict
encrypted_payload_out_from_dict = EncryptedPayloadOut.from_dict(encrypted_payload_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


