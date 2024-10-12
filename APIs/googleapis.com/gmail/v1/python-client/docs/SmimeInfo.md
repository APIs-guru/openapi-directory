# SmimeInfo

An S/MIME email config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_key_password** | **str** | Encrypted key password, when key is encrypted. | [optional] 
**expiration** | **str** | When the certificate expires (in milliseconds since epoch). | [optional] 
**id** | **str** | The immutable ID for the SmimeInfo. | [optional] 
**is_default** | **bool** | Whether this SmimeInfo is the default one for this user&#39;s send-as address. | [optional] 
**issuer_cn** | **str** | The S/MIME certificate issuer&#39;s common name. | [optional] 
**pem** | **str** | PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key). | [optional] 
**pkcs12** | **bytearray** | PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately. | [optional] 

## Example

```python
from openapi_client.models.smime_info import SmimeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SmimeInfo from a JSON string
smime_info_instance = SmimeInfo.from_json(json)
# print the JSON string representation of the object
print(SmimeInfo.to_json())

# convert the object into a dict
smime_info_dict = smime_info_instance.to_dict()
# create an instance of SmimeInfo from a dict
smime_info_from_dict = SmimeInfo.from_dict(smime_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


