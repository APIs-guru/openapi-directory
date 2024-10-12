# Authority

Note kind that represents a logical attestation \"role\" or \"authority\". For example, an organization might have one `Authority` for \"QA\" and one for \"build\". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hint** | [**Hint**](Hint.md) |  | [optional] 

## Example

```python
from openapi_client.models.authority import Authority

# TODO update the JSON string below
json = "{}"
# create an instance of Authority from a JSON string
authority_instance = Authority.from_json(json)
# print the JSON string representation of the object
print(Authority.to_json())

# convert the object into a dict
authority_dict = authority_instance.to_dict()
# create an instance of Authority from a dict
authority_from_dict = Authority.from_dict(authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


