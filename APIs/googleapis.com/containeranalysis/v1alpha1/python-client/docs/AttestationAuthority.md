# AttestationAuthority

Note kind that represents a logical attestation \"role\" or \"authority\". For example, an organization might have one `AttestationAuthority` for \"QA\" and one for \"build\". This Note is intended to act strictly as a grouping mechanism for the attached Occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an Occurrence to a given Note. It also provides a single point of lookup to find all attached Attestation Occurrences, even if they don't all live in the same project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hint** | [**AttestationAuthorityHint**](AttestationAuthorityHint.md) |  | [optional] 

## Example

```python
from openapi_client.models.attestation_authority import AttestationAuthority

# TODO update the JSON string below
json = "{}"
# create an instance of AttestationAuthority from a JSON string
attestation_authority_instance = AttestationAuthority.from_json(json)
# print the JSON string representation of the object
print(AttestationAuthority.to_json())

# convert the object into a dict
attestation_authority_dict = attestation_authority_instance.to_dict()
# create an instance of AttestationAuthority from a dict
attestation_authority_from_dict = AttestationAuthority.from_dict(attestation_authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


