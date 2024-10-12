# Retrieve200ResponseAutoRemediationPrs

Defines automatic remediation policies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backlog_prs_enabled** | **bool** | If true, allows automatic remediation of prioritized backlog issues | [optional] 
**fresh_prs_enabled** | **bool** | If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified | [optional] 
**use_patch_remediation** | **bool** | If true, allows using patched remediation | [optional] 

## Example

```python
from openapi_client.models.retrieve200_response_auto_remediation_prs import Retrieve200ResponseAutoRemediationPrs

# TODO update the JSON string below
json = "{}"
# create an instance of Retrieve200ResponseAutoRemediationPrs from a JSON string
retrieve200_response_auto_remediation_prs_instance = Retrieve200ResponseAutoRemediationPrs.from_json(json)
# print the JSON string representation of the object
print(Retrieve200ResponseAutoRemediationPrs.to_json())

# convert the object into a dict
retrieve200_response_auto_remediation_prs_dict = retrieve200_response_auto_remediation_prs_instance.to_dict()
# create an instance of Retrieve200ResponseAutoRemediationPrs from a dict
retrieve200_response_auto_remediation_prs_from_dict = Retrieve200ResponseAutoRemediationPrs.from_dict(retrieve200_response_auto_remediation_prs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


