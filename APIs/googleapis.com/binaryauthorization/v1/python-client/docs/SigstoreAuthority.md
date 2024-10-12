# SigstoreAuthority

A Sigstore authority, used to verify signatures that are created by Sigstore. An authority is analogous to an attestation authenticator, verifying that a signature is valid or invalid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Optional. A user-provided name for this &#x60;SigstoreAuthority&#x60;. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. | [optional] 
**public_key_set** | [**SigstorePublicKeySet**](SigstorePublicKeySet.md) |  | [optional] 

## Example

```python
from openapi_client.models.sigstore_authority import SigstoreAuthority

# TODO update the JSON string below
json = "{}"
# create an instance of SigstoreAuthority from a JSON string
sigstore_authority_instance = SigstoreAuthority.from_json(json)
# print the JSON string representation of the object
print(SigstoreAuthority.to_json())

# convert the object into a dict
sigstore_authority_dict = sigstore_authority_instance.to_dict()
# create an instance of SigstoreAuthority from a dict
sigstore_authority_from_dict = SigstoreAuthority.from_dict(sigstore_authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


