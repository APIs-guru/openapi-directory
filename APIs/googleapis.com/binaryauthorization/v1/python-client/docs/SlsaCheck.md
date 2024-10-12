# SlsaCheck

A SLSA provenance attestation check, which ensures that images are built by a trusted builder using source code from its trusted repositories only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[VerificationRule]**](VerificationRule.md) | Specifies a list of verification rules for the SLSA attestations. An image is considered compliant with the SlsaCheck if any of the rules are satisfied. | [optional] 

## Example

```python
from openapi_client.models.slsa_check import SlsaCheck

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaCheck from a JSON string
slsa_check_instance = SlsaCheck.from_json(json)
# print the JSON string representation of the object
print(SlsaCheck.to_json())

# convert the object into a dict
slsa_check_dict = slsa_check_instance.to_dict()
# create an instance of SlsaCheck from a dict
slsa_check_from_dict = SlsaCheck.from_dict(slsa_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


