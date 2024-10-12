# SandboxBeneficiary

Beneficiary information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Beneficiary name | [optional] 

## Example

```python
from openapi_client.models.sandbox_beneficiary import SandboxBeneficiary

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxBeneficiary from a JSON string
sandbox_beneficiary_instance = SandboxBeneficiary.from_json(json)
# print the JSON string representation of the object
print(SandboxBeneficiary.to_json())

# convert the object into a dict
sandbox_beneficiary_dict = sandbox_beneficiary_instance.to_dict()
# create an instance of SandboxBeneficiary from a dict
sandbox_beneficiary_from_dict = SandboxBeneficiary.from_dict(sandbox_beneficiary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


