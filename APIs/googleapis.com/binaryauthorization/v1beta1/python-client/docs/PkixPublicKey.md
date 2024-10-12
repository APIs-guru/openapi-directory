# PkixPublicKey

A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key_pem** | **str** | A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13 | [optional] 
**signature_algorithm** | **str** | The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in &#x60;public_key_pem&#x60; (i.e. this algorithm must match that of the public key). | [optional] 

## Example

```python
from openapi_client.models.pkix_public_key import PkixPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of PkixPublicKey from a JSON string
pkix_public_key_instance = PkixPublicKey.from_json(json)
# print the JSON string representation of the object
print(PkixPublicKey.to_json())

# convert the object into a dict
pkix_public_key_dict = pkix_public_key_instance.to_dict()
# create an instance of PkixPublicKey from a dict
pkix_public_key_from_dict = PkixPublicKey.from_dict(pkix_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


