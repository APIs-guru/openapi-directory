# Attestation

Occurrence that represents a single \"attestation\". The authenticity of an Attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the AttestationAuthority to which this Attestation is attached is primarily useful for look-up (how to find this Attestation if you already know the Authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pgp_signed_attestation** | [**PgpSignedAttestation**](PgpSignedAttestation.md) |  | [optional] 

## Example

```python
from openapi_client.models.attestation import Attestation

# TODO update the JSON string below
json = "{}"
# create an instance of Attestation from a JSON string
attestation_instance = Attestation.from_json(json)
# print the JSON string representation of the object
print(Attestation.to_json())

# convert the object into a dict
attestation_dict = attestation_instance.to_dict()
# create an instance of Attestation from a dict
attestation_from_dict = Attestation.from_dict(attestation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


