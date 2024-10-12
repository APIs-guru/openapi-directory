# SigstorePublicKeySet

A bundle of Sigstore public keys, used to verify Sigstore signatures. A signature is authenticated by a `SigstorePublicKeySet` if any of the keys verify it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_keys** | [**List[SigstorePublicKey]**](SigstorePublicKey.md) | Required. &#x60;public_keys&#x60; must have at least one entry. | [optional] 

## Example

```python
from openapi_client.models.sigstore_public_key_set import SigstorePublicKeySet

# TODO update the JSON string below
json = "{}"
# create an instance of SigstorePublicKeySet from a JSON string
sigstore_public_key_set_instance = SigstorePublicKeySet.from_json(json)
# print the JSON string representation of the object
print(SigstorePublicKeySet.to_json())

# convert the object into a dict
sigstore_public_key_set_dict = sigstore_public_key_set_instance.to_dict()
# create an instance of SigstorePublicKeySet from a dict
sigstore_public_key_set_from_dict = SigstorePublicKeySet.from_dict(sigstore_public_key_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


