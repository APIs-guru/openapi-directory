# AttestationAuthenticator

An attestation authenticator that will be used to verify attestations. Typically this is just a set of public keys. Conceptually, an authenticator can be treated as always returning either \"authenticated\" or \"not authenticated\" when presented with a signed attestation (almost always assumed to be a [DSSE](https://github.com/secure-systems-lab/dsse) attestation). The details of how an authenticator makes this decision are specific to the type of 'authenticator' that this message wraps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Optional. A user-provided name for this &#x60;AttestationAuthenticator&#x60;. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. | [optional] 
**pkix_public_key_set** | [**PkixPublicKeySet**](PkixPublicKeySet.md) |  | [optional] 

## Example

```python
from openapi_client.models.attestation_authenticator import AttestationAuthenticator

# TODO update the JSON string below
json = "{}"
# create an instance of AttestationAuthenticator from a JSON string
attestation_authenticator_instance = AttestationAuthenticator.from_json(json)
# print the JSON string representation of the object
print(AttestationAuthenticator.to_json())

# convert the object into a dict
attestation_authenticator_dict = attestation_authenticator_instance.to_dict()
# create an instance of AttestationAuthenticator from a dict
attestation_authenticator_from_dict = AttestationAuthenticator.from_dict(attestation_authenticator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


