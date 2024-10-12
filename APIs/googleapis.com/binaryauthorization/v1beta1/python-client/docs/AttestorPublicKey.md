# AttestorPublicKey

An attestor public key that will be used to verify attestations signed by this attestor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ascii_armored_pgp_public_key** | **str** | ASCII-armored representation of a PGP public key, as the entire output by the command &#x60;gpg --export --armor foo@example.com&#x60; (either LF or CRLF line endings). When using this field, &#x60;id&#x60; should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If &#x60;id&#x60; is provided by the caller, it will be overwritten by the API-calculated ID. | [optional] 
**comment** | **str** | Optional. A descriptive comment. This field may be updated. | [optional] 
**id** | **str** | The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on &#x60;public_key&#x60; cases below for details. | [optional] 
**pkix_public_key** | [**PkixPublicKey**](PkixPublicKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.attestor_public_key import AttestorPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of AttestorPublicKey from a JSON string
attestor_public_key_instance = AttestorPublicKey.from_json(json)
# print the JSON string representation of the object
print(AttestorPublicKey.to_json())

# convert the object into a dict
attestor_public_key_dict = attestor_public_key_instance.to_dict()
# create an instance of AttestorPublicKey from a dict
attestor_public_key_from_dict = AttestorPublicKey.from_dict(attestor_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


