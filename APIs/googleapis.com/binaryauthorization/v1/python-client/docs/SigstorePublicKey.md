# SigstorePublicKey

A Sigstore public key. `SigstorePublicKey` is the public key material used to authenticate Sigstore signatures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key_pem** | **str** | The public key material in PEM format. | [optional] 

## Example

```python
from openapi_client.models.sigstore_public_key import SigstorePublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of SigstorePublicKey from a JSON string
sigstore_public_key_instance = SigstorePublicKey.from_json(json)
# print the JSON string representation of the object
print(SigstorePublicKey.to_json())

# convert the object into a dict
sigstore_public_key_dict = sigstore_public_key_instance.to_dict()
# create an instance of SigstorePublicKey from a dict
sigstore_public_key_from_dict = SigstorePublicKey.from_dict(sigstore_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


