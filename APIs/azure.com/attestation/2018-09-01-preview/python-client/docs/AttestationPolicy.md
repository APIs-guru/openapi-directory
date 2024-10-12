# AttestationPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **str** | String-encoded attestation policy document. | [optional] 

## Example

```python
from openapi_client.models.attestation_policy import AttestationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AttestationPolicy from a JSON string
attestation_policy_instance = AttestationPolicy.from_json(json)
# print the JSON string representation of the object
print(AttestationPolicy.to_json())

# convert the object into a dict
attestation_policy_dict = attestation_policy_instance.to_dict()
# create an instance of AttestationPolicy from a dict
attestation_policy_from_dict = AttestationPolicy.from_dict(attestation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


