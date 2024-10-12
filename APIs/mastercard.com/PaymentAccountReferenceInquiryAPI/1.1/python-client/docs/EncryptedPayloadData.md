# EncryptedPayloadData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_data** | **str** | Encrypted payload that contains the Primary Account Number (PAN). Refer to Encrypted Data Objects section for the format of encrypted data or download the latest OpenAPI YAML  specification. __Max length:__ 256k   __Type:__ String Hex-encoded Data (case-insensitive) &lt;/br&gt; &lt;/br&gt;   | [optional] 
**encrypted_key** | **str** | One-time use AES key encrypted by the MasterCard public key (as identified by &#39;publicKeyFingerprint&#39;) using the OAEP or RSA Encryption Standard PKCS 1 v1.5 (depending on the value of  &#39;oaepHashingAlgorithm&#39;). Requirement is for a 128-bit key (with 256-bit key supported as an option).  &lt;/br&gt;&lt;br&gt; __Data Type:__ String. Hex-encoded data (case-insensitive).&lt;br&gt;  __Max Length:__ 512 &lt;/br&gt;&lt;/br&gt;  | [optional] 
**iv** | **str** | The initialization vector used when encrypting data using the one-time use AES key. Must be exactly 16 bytes (32 character hex string) to match the block size. If not present, an IV of zero is assumed.&lt;br&gt;&lt;br&gt;  __Length:__ 32 (exactly)&lt;br&gt; __Type:__ String Hex-encoded Data (case-insensitive).&lt;br&gt;&lt;br&gt;  | [optional] 
**oaep_hashing_algorithm** | **str** | Hashing algorithm used with the OAEP scheme. If omitted, then the RSA Encryption Standard PKCS 1 v1.5 will be used. You must use one of the following algorithms; SHA256 - Use the SHA-  256 algorithm | SHA512 - Use the SHA-512 algorithm.&lt;br&gt;&lt;br&gt;    __Max length:__ 6&lt;br&gt;  __Type:__ String  | [optional] 
**public_key_fingerprint** | **str** | The fingerprint of the public key used to encrypt the ephemeral AES key. Max length - 64. Type - String Hex-encoded Data (case-insensitive).  | [optional] 

## Example

```python
from openapi_client.models.encrypted_payload_data import EncryptedPayloadData

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptedPayloadData from a JSON string
encrypted_payload_data_instance = EncryptedPayloadData.from_json(json)
# print the JSON string representation of the object
print(EncryptedPayloadData.to_json())

# convert the object into a dict
encrypted_payload_data_dict = encrypted_payload_data_instance.to_dict()
# create an instance of EncryptedPayloadData from a dict
encrypted_payload_data_from_dict = EncryptedPayloadData.from_dict(encrypted_payload_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


