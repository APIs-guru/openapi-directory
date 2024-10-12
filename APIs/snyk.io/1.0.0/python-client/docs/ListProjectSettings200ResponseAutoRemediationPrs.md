# ListProjectSettings200ResponseAutoRemediationPrs

Defines automatic remediation policies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backlog_prs_enabled** | **bool** | If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified | [optional] 
**fresh_prs_enabled** | **bool** | If true, allows automatic remediation of prioritized backlog issues | [optional] 
**use_patch_remediation** | **bool** | If true, allows using patched remediation | [optional] 

## Example

```python
from openapi_client.models.list_project_settings200_response_auto_remediation_prs import ListProjectSettings200ResponseAutoRemediationPrs

# TODO update the JSON string below
json = "{}"
# create an instance of ListProjectSettings200ResponseAutoRemediationPrs from a JSON string
list_project_settings200_response_auto_remediation_prs_instance = ListProjectSettings200ResponseAutoRemediationPrs.from_json(json)
# print the JSON string representation of the object
print(ListProjectSettings200ResponseAutoRemediationPrs.to_json())

# convert the object into a dict
list_project_settings200_response_auto_remediation_prs_dict = list_project_settings200_response_auto_remediation_prs_instance.to_dict()
# create an instance of ListProjectSettings200ResponseAutoRemediationPrs from a dict
list_project_settings200_response_auto_remediation_prs_from_dict = ListProjectSettings200ResponseAutoRemediationPrs.from_dict(list_project_settings200_response_auto_remediation_prs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


