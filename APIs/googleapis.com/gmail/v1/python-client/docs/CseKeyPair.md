# CseKeyPair

A client-side encryption S/MIME key pair, which is comprised of a public key, its certificate chain, and metadata for its paired private key. Gmail uses the key pair to complete the following tasks: - Sign outgoing client-side encrypted messages. - Save and reopen drafts of client-side encrypted messages. - Save and reopen sent messages. - Decrypt incoming or archived S/MIME messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_time** | **str** | Output only. If a key pair is set to &#x60;DISABLED&#x60;, the time that the key pair&#39;s state changed from &#x60;ENABLED&#x60; to &#x60;DISABLED&#x60;. This field is present only when the key pair is in state &#x60;DISABLED&#x60;. | [optional] [readonly] 
**enablement_state** | **str** | Output only. The current state of the key pair. | [optional] [readonly] 
**key_pair_id** | **str** | Output only. The immutable ID for the client-side encryption S/MIME key pair. | [optional] [readonly] 
**pem** | **str** | Output only. The public key and its certificate chain, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format. | [optional] [readonly] 
**pkcs7** | **str** | Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor. | [optional] 
**private_key_metadata** | [**List[CsePrivateKeyMetadata]**](CsePrivateKeyMetadata.md) | Metadata for instances of this key pair&#39;s private key. | [optional] 
**subject_email_addresses** | **List[str]** | Output only. The email address identities that are specified on the leaf certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cse_key_pair import CseKeyPair

# TODO update the JSON string below
json = "{}"
# create an instance of CseKeyPair from a JSON string
cse_key_pair_instance = CseKeyPair.from_json(json)
# print the JSON string representation of the object
print(CseKeyPair.to_json())

# convert the object into a dict
cse_key_pair_dict = cse_key_pair_instance.to_dict()
# create an instance of CseKeyPair from a dict
cse_key_pair_from_dict = CseKeyPair.from_dict(cse_key_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


