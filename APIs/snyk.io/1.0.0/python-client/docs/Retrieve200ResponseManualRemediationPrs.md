# Retrieve200ResponseManualRemediationPrs

Defines manual remediation policies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_patch_remediation** | **bool** | If true, allows using patched remediation | [optional] 

## Example

```python
from openapi_client.models.retrieve200_response_manual_remediation_prs import Retrieve200ResponseManualRemediationPrs

# TODO update the JSON string below
json = "{}"
# create an instance of Retrieve200ResponseManualRemediationPrs from a JSON string
retrieve200_response_manual_remediation_prs_instance = Retrieve200ResponseManualRemediationPrs.from_json(json)
# print the JSON string representation of the object
print(Retrieve200ResponseManualRemediationPrs.to_json())

# convert the object into a dict
retrieve200_response_manual_remediation_prs_dict = retrieve200_response_manual_remediation_prs_instance.to_dict()
# create an instance of Retrieve200ResponseManualRemediationPrs from a dict
retrieve200_response_manual_remediation_prs_from_dict = Retrieve200ResponseManualRemediationPrs.from_dict(retrieve200_response_manual_remediation_prs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


