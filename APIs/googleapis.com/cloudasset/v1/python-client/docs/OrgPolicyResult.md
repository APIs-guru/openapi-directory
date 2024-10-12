# OrgPolicyResult

The organization policy result to the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consolidated_policy** | [**AnalyzerOrgPolicy**](AnalyzerOrgPolicy.md) |  | [optional] 
**folders** | **List[str]** | The folder(s) that this consolidated policy belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the consolidated policy belongs (directly or cascadingly) to one or more folders. | [optional] 
**organization** | **str** | The organization that this consolidated policy belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the consolidated policy belongs (directly or cascadingly) to an organization. | [optional] 
**policy_bundle** | [**List[AnalyzerOrgPolicy]**](AnalyzerOrgPolicy.md) | The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource. to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list. | [optional] 
**project** | **str** | The project that this consolidated policy belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the consolidated policy belongs to a project. | [optional] 

## Example

```python
from openapi_client.models.org_policy_result import OrgPolicyResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrgPolicyResult from a JSON string
org_policy_result_instance = OrgPolicyResult.from_json(json)
# print the JSON string representation of the object
print(OrgPolicyResult.to_json())

# convert the object into a dict
org_policy_result_dict = org_policy_result_instance.to_dict()
# create an instance of OrgPolicyResult from a dict
org_policy_result_from_dict = OrgPolicyResult.from_dict(org_policy_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


