# ListProjectSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_dep_upgrade_enabled** | **bool** | If set to &#x60;true&#x60;, Snyk will raise dependency upgrade PRs automatically. | [optional] 
**auto_dep_upgrade_ignored_dependencies** | **List[object]** | An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade. | [optional] 
**auto_dep_upgrade_limit** | **float** | The limit on auto dependency upgrade PRs. | [optional] 
**auto_dep_upgrade_min_age** | **float** | The age (in days) that an automatic dependency check is valid for | [optional] 
**auto_remediation_prs** | [**ListProjectSettings200ResponseAutoRemediationPrs**](ListProjectSettings200ResponseAutoRemediationPrs.md) |  | [optional] 
**pull_request_assignment** | [**Retrieve200ResponsePullRequestAssignment**](Retrieve200ResponsePullRequestAssignment.md) |  | [optional] 
**pull_request_fail_on_any_vulns** | **bool** | If set to &#x60;true&#x60;, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency. | [optional] 
**pull_request_fail_only_for_high_severity** | **bool** | If set to &#x60;true&#x60;, fail Snyk Test only for high and critical severity vulnerabilities | [optional] 
**pull_request_test_enabled** | **bool** | If set to &#x60;true&#x60;, Snyk Test checks PRs for vulnerabilities.:cq | [optional] 

## Example

```python
from openapi_client.models.list_project_settings200_response import ListProjectSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListProjectSettings200Response from a JSON string
list_project_settings200_response_instance = ListProjectSettings200Response.from_json(json)
# print the JSON string representation of the object
print(ListProjectSettings200Response.to_json())

# convert the object into a dict
list_project_settings200_response_dict = list_project_settings200_response_instance.to_dict()
# create an instance of ListProjectSettings200Response from a dict
list_project_settings200_response_from_dict = ListProjectSettings200Response.from_dict(list_project_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


