# PkixPublicKey

A public key in the PkixPublicKey [format](https://tools.ietf.org/html/rfc5280#section-4.1.2.7). Public keys of this type are typically textually encoded using the PEM format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Optional. The ID of this public key. Signatures verified by Binary Authorization must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. This may be explicitly provided by the caller, but it MUST be a valid RFC3986 URI. If &#x60;key_id&#x60; is left blank and this &#x60;PkixPublicKey&#x60; is not used in the context of a wrapper (see next paragraph), a default key ID will be computed based on the digest of the DER encoding of the public key. If this &#x60;PkixPublicKey&#x60; is used in the context of a wrapper that has its own notion of key ID (e.g. &#x60;AttestorPublicKey&#x60;), then this field can either: * Match that value exactly. * Or be left blank, in which case it behaves exactly as though it is equal to that wrapper value. | [optional] 
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


