# CseIdentity

The client-side encryption (CSE) configuration for the email address of an authenticated user. Gmail uses CSE configurations to save drafts of client-side encrypted email messages, and to sign and send encrypted email messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address for the sending identity. The email address must be the primary email address of the authenticated user. | [optional] 
**primary_key_pair_id** | **str** | If a key pair is associated, the ID of the key pair, CseKeyPair. | [optional] 
**sign_and_encrypt_key_pairs** | [**SignAndEncryptKeyPairs**](SignAndEncryptKeyPairs.md) |  | [optional] 

## Example

```python
from openapi_client.models.cse_identity import CseIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of CseIdentity from a JSON string
cse_identity_instance = CseIdentity.from_json(json)
# print the JSON string representation of the object
print(CseIdentity.to_json())

# convert the object into a dict
cse_identity_dict = cse_identity_instance.to_dict()
# create an instance of CseIdentity from a dict
cse_identity_from_dict = CseIdentity.from_dict(cse_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


