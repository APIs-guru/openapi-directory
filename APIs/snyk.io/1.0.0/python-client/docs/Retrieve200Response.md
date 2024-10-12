# Retrieve200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_dep_upgrade_enabled** | **bool** | Defines if the functionality is enabled | [optional] 
**auto_dep_upgrade_ignored_dependencies** | **List[object]** | A list of strings defining what dependencies should be ignored | [optional] 
**auto_dep_upgrade_limit** | **float** | A limit on how many automatic dependency upgrade PRs can be opened simultaneously | [optional] 
**auto_dep_upgrade_min_age** | **float** | The age (in days) that an automatic dependency check is valid for | [optional] 
**auto_remediation_prs** | [**Retrieve200ResponseAutoRemediationPrs**](Retrieve200ResponseAutoRemediationPrs.md) |  | [optional] 
**dockerfile_scm_enabled** | **bool** | If true, will automatically detect and scan Dockerfiles in your Git repositories, surface base image vulnerabilities and recommend possible fixes | [optional] 
**manual_remediation_prs** | [**Retrieve200ResponseManualRemediationPrs**](Retrieve200ResponseManualRemediationPrs.md) |  | [optional] 
**pull_request_assignment** | [**Retrieve200ResponsePullRequestAssignment**](Retrieve200ResponsePullRequestAssignment.md) |  | [optional] 
**pull_request_fail_on_any_vulns** | **bool** | If an opened PR should fail to be validated if any vulnerable dependencies have been detected | [optional] 
**pull_request_fail_only_for_high_severity** | **bool** | If an opened PR only should fail its validation if any dependencies are marked as being of high severity | [optional] 
**pull_request_test_enabled** | **bool** | If opened PRs should be tested | [optional] 

## Example

```python
from openapi_client.models.retrieve200_response import Retrieve200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Retrieve200Response from a JSON string
retrieve200_response_instance = Retrieve200Response.from_json(json)
# print the JSON string representation of the object
print(Retrieve200Response.to_json())

# convert the object into a dict
retrieve200_response_dict = retrieve200_response_instance.to_dict()
# create an instance of Retrieve200Response from a dict
retrieve200_response_from_dict = Retrieve200Response.from_dict(retrieve200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


