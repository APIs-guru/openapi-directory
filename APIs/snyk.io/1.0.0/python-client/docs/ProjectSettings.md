# ProjectSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_dep_upgrade_enabled** | **bool** | If set to &#x60;true&#x60;, Snyk will raise dependency upgrade PRs automatically. | [optional] 
**auto_dep_upgrade_ignored_dependencies** | **List[object]** | An array of comma-separated strings with names of dependencies you wish Snyk to ignore to upgrade. | [optional] 
**auto_dep_upgrade_limit** | **float** | The limit on auto dependency upgrade PRs. | [optional] 
**auto_dep_upgrade_min_age** | **float** | The age (in days) that an automatic dependency check is valid for | [optional] 
**auto_remediation_prs** | [**AutoRemediationPrs**](AutoRemediationPrs.md) |  | [optional] 
**pull_request_assignment** | [**PullRequestAssignment**](PullRequestAssignment.md) |  | [optional] 
**pull_request_fail_on_any_vulns** | **bool** | If set to &#x60;true&#x60;, fail Snyk Test if the repo has any vulnerabilities. Otherwise, fail only when the PR is adding a vulnerable dependency. | [optional] 
**pull_request_fail_only_for_high_severity** | **bool** | If set to &#x60;true&#x60;, fail Snyk Test only for high and critical severity vulnerabilities | [optional] 
**pull_request_test_enabled** | **bool** | If set to &#x60;true&#x60;, Snyk Test checks PRs for vulnerabilities.:cq | [optional] 

## Example

```python
from openapi_client.models.project_settings import ProjectSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSettings from a JSON string
project_settings_instance = ProjectSettings.from_json(json)
# print the JSON string representation of the object
print(ProjectSettings.to_json())

# convert the object into a dict
project_settings_dict = project_settings_instance.to_dict()
# create an instance of ProjectSettings from a dict
project_settings_from_dict = ProjectSettings.from_dict(project_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


