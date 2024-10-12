# PkixPublicKeySet

A bundle of PKIX public keys, used to authenticate attestation signatures. Generally, a signature is considered to be authenticated by a `PkixPublicKeySet` if any of the public keys verify it (i.e. it is an \"OR\" of the keys).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkix_public_keys** | [**List[PkixPublicKey]**](PkixPublicKey.md) | Required. &#x60;pkix_public_keys&#x60; must have at least one entry. | [optional] 

## Example

```python
from openapi_client.models.pkix_public_key_set import PkixPublicKeySet

# TODO update the JSON string below
json = "{}"
# create an instance of PkixPublicKeySet from a JSON string
pkix_public_key_set_instance = PkixPublicKeySet.from_json(json)
# print the JSON string representation of the object
print(PkixPublicKeySet.to_json())

# convert the object into a dict
pkix_public_key_set_dict = pkix_public_key_set_instance.to_dict()
# create an instance of PkixPublicKeySet from a dict
pkix_public_key_set_from_dict = PkixPublicKeySet.from_dict(pkix_public_key_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


