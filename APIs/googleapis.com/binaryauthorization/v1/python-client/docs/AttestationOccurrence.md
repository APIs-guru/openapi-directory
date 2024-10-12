# AttestationOccurrence

Occurrence that represents a single \"attestation\". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jwts** | [**List[Jwt]**](Jwt.md) | One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the &#x60;serialized_payload&#x60; field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the &#x60;serialized_payload&#x60; SHOULD be left empty. Each JWT SHOULD encode a claim specific to the &#x60;resource_uri&#x60; of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas. | [optional] 
**serialized_payload** | **bytearray** | Required. The serialized payload that is verified by one or more &#x60;signatures&#x60;. | [optional] 
**signatures** | [**List[Signature]**](Signature.md) | One or more signatures over &#x60;serialized_payload&#x60;. Verifier implementations should consider this attestation message verified if at least one &#x60;signature&#x60; verifies &#x60;serialized_payload&#x60;. See &#x60;Signature&#x60; in common.proto for more details on signature structure and verification. | [optional] 

## Example

```python
from openapi_client.models.attestation_occurrence import AttestationOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of AttestationOccurrence from a JSON string
attestation_occurrence_instance = AttestationOccurrence.from_json(json)
# print the JSON string representation of the object
print(AttestationOccurrence.to_json())

# convert the object into a dict
attestation_occurrence_dict = attestation_occurrence_instance.to_dict()
# create an instance of AttestationOccurrence from a dict
attestation_occurrence_from_dict = AttestationOccurrence.from_dict(attestation_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


