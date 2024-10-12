# UserOwnedDrydockNote

An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegation_service_account_email** | **str** | Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (&#x60;containeranalysis.notes.occurrences.viewer&#x60;). This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern. | [optional] [readonly] 
**note_reference** | **str** | Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note, created by the user, in the format: &#x60;projects/*/notes/*&#x60; (or the legacy &#x60;providers/*/notes/*&#x60;). This field may not be updated. An attestation by this attestor is stored as a Drydock ATTESTATION_AUTHORITY Occurrence that names a container image and that links to this Note. Drydock is an external dependency. | [optional] 
**public_keys** | [**List[AttestorPublicKey]**](AttestorPublicKey.md) | Optional. Public keys that verify attestations signed by this attestor. This field may be updated. If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request. If this field is empty, this attestor always returns that no valid attestations exist. | [optional] 

## Example

```python
from openapi_client.models.user_owned_drydock_note import UserOwnedDrydockNote

# TODO update the JSON string below
json = "{}"
# create an instance of UserOwnedDrydockNote from a JSON string
user_owned_drydock_note_instance = UserOwnedDrydockNote.from_json(json)
# print the JSON string representation of the object
print(UserOwnedDrydockNote.to_json())

# convert the object into a dict
user_owned_drydock_note_dict = user_owned_drydock_note_instance.to_dict()
# create an instance of UserOwnedDrydockNote from a dict
user_owned_drydock_note_from_dict = UserOwnedDrydockNote.from_dict(user_owned_drydock_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


