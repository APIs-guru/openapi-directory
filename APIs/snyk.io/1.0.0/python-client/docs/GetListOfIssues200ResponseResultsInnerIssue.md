# GetListOfIssues200ResponseResultsInnerIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvssv3** | **str** | The CVSS v3 string that signifies how the CVSS score was calculated (not applicable to licenses) | [optional] 
**credit** | **List[object]** | The list of people responsible for first uncovering or reporting the issue (not applicable to licenses) | [optional] 
**cvss_score** | **float** | The CVSS score that results from running the CVSSv3 string (not applicable to licenses) | [optional] 
**disclosure_time** | **str** | The date that the vulnerability was first disclosed (not applicable to licenses) | [optional] 
**exploit_maturity** | **str** | The exploit maturity of the issue | 
**id** | **str** | The identifier of the issue | 
**identifiers** | [**GetListOfIssues200ResponseResultsInnerIssueIdentifiers**](GetListOfIssues200ResponseResultsInnerIssueIdentifiers.md) |  | [optional] 
**ignored** | **List[object]** | The list of ignore rules that were applied to the issue (only present if issue was ignored and no &#x60;groupBy&#x60; in the API request) | [optional] 
**is_ignored** | **bool** | Whether the issue has been ignored (only present if there is no &#x60;groupBy&#x60; in the API request) | [optional] 
**is_patchable** | **bool** | Whether the issue can be patched | [optional] 
**is_patched** | **bool** | Whether the issue has been patched (not applicable to licenses and only present if there is no &#x60;groupBy&#x60; in the API request) | [optional] 
**is_pinnable** | **bool** | Whether the issue can be pinned | [optional] 
**is_upgradable** | **bool** | Whether the issue can be fixed by upgrading to a later version of the dependency | [optional] 
**jira_issue_url** | **str** | The link to the Jira issue attached to the vulnerability | [optional] 
**language** | **str** | The language of the issue | [optional] 
**original_severity** | **str** | The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied | 
**package** | **str** | The name of the package that the issue relates to | 
**package_manager** | **str** | The package manager of the issue | [optional] 
**patches** | **List[object]** | A list of patches available for the given issue (not applicable to licenses) | [optional] 
**priority_score** | **float** | The priority score ranging between 0-1000 | [optional] 
**publication_time** | **str** | The date that the vulnerability was first published by Snyk (not applicable to licenses) | [optional] 
**semver** | [**GetListOfIssues200ResponseResultsInnerIssueSemver**](GetListOfIssues200ResponseResultsInnerIssueSemver.md) |  | [optional] 
**severity** | **str** | The severity status of the issue, after policies are applied | 
**title** | **str** | The issue title | 
**type** | **str** | The issue type, can be \&quot;vuln\&quot;, \&quot;license\&quot; | 
**unique_severities_list** | **List[object]** | A list of all severities in issue per projects | [optional] 
**url** | **str** | URL to a page containing information about the issue | 
**version** | **str** | The version of the package that the issue relates to | 

## Example

```python
from openapi_client.models.get_list_of_issues200_response_results_inner_issue import GetListOfIssues200ResponseResultsInnerIssue

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssues200ResponseResultsInnerIssue from a JSON string
get_list_of_issues200_response_results_inner_issue_instance = GetListOfIssues200ResponseResultsInnerIssue.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssues200ResponseResultsInnerIssue.to_json())

# convert the object into a dict
get_list_of_issues200_response_results_inner_issue_dict = get_list_of_issues200_response_results_inner_issue_instance.to_dict()
# create an instance of GetListOfIssues200ResponseResultsInnerIssue from a dict
get_list_of_issues200_response_results_inner_issue_from_dict = GetListOfIssues200ResponseResultsInnerIssue.from_dict(get_list_of_issues200_response_results_inner_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


