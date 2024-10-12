# AttestationAuthorityHint

This submessage provides human-readable hints about the purpose of the AttestationAuthority. Because the name of a Note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from \"readable\" names more suitable for debug output. Note that these hints should NOT be used to look up AttestationAuthorities in security sensitive contexts, such as when looking up Attestations to verify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human_readable_name** | **str** | The human readable name of this Attestation Authority, for example \&quot;qa\&quot;. | [optional] 

## Example

```python
from openapi_client.models.attestation_authority_hint import AttestationAuthorityHint

# TODO update the JSON string below
json = "{}"
# create an instance of AttestationAuthorityHint from a JSON string
attestation_authority_hint_instance = AttestationAuthorityHint.from_json(json)
# print the JSON string representation of the object
print(AttestationAuthorityHint.to_json())

# convert the object into a dict
attestation_authority_hint_dict = attestation_authority_hint_instance.to_dict()
# create an instance of AttestationAuthorityHint from a dict
attestation_authority_hint_from_dict = AttestationAuthorityHint.from_dict(attestation_authority_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


