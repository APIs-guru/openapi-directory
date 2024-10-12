# GenericSignedAttestation

An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). | [optional] 
**serialized_payload** | **bytearray** | The serialized payload that is verified by one or more &#x60;signatures&#x60;. The encoding and semantic meaning of this payload must match what is set in &#x60;content_type&#x60;. | [optional] 
**signatures** | [**List[Signature]**](Signature.md) | One or more signatures over &#x60;serialized_payload&#x60;. Verifier implementations should consider this attestation message verified if at least one &#x60;signature&#x60; verifies &#x60;serialized_payload&#x60;. See &#x60;Signature&#x60; in common.proto for more details on signature structure and verification. | [optional] 

## Example

```python
from openapi_client.models.generic_signed_attestation import GenericSignedAttestation

# TODO update the JSON string below
json = "{}"
# create an instance of GenericSignedAttestation from a JSON string
generic_signed_attestation_instance = GenericSignedAttestation.from_json(json)
# print the JSON string representation of the object
print(GenericSignedAttestation.to_json())

# convert the object into a dict
generic_signed_attestation_dict = generic_signed_attestation_instance.to_dict()
# create an instance of GenericSignedAttestation from a dict
generic_signed_attestation_from_dict = GenericSignedAttestation.from_dict(generic_signed_attestation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


