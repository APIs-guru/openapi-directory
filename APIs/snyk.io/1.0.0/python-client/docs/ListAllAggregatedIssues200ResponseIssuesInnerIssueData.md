# ListAllAggregatedIssues200ResponseIssuesInnerIssueData

The details of the issue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvssv3** | **str** | The CVSS v3 string that signifies how the CVSS score was calculated (Non-IaC projects only) | 
**credit** | **List[object]** | The list of people responsible for first uncovering or reporting the issue (Non-IaC projects only) | 
**cvss_score** | **float** | The CVSS score that results from running the CVSSv3 string (Non-IaC projects only) | 
**description** | **str** |  | 
**disclosure_time** | **str** | The date that the vulnerability was first disclosed | 
**exploit_maturity** | **str** | The exploit maturity of the issue | 
**id** | **str** | The identifier of the issue | 
**identifiers** | [**ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers**](ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers.md) |  | 
**is_malicious_package** | **bool** | Whether the issue is intentional, indicating a malicious package | 
**language** | **str** | The language of the issue (Non-IaC projects only) | 
**nearest_fixed_in_version** | **str** | Nearest version which includes a fix for the issue. This is populated for container projects only. (Non-IaC projects only) | 
**original_severity** | **str** | The original severity status of the issue, as retrieved from Snyk Vulnerability database, before policies are applied | 
**patches** | **List[object]** | A list of patches available for the given issue (Non-IaC projects only) | 
**path** | **str** | Path to the resource property violating the policy within the scanned project. (IaC projects only) | 
**publication_time** | **str** | The date that the vulnerability was first published by Snyk (Non-IaC projects only) | 
**semver** | [**ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver**](ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver.md) |  | 
**severity** | **str** | The severity status of the issue, after policies are applied | 
**title** | **str** | The issue title | 
**url** | **str** | URL to a page containing information about the issue | 
**violated_policy_public_id** | **str** | The ID of the violated policy in the issue (IaC projects only) | 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response_issues_inner_issue_data import ListAllAggregatedIssues200ResponseIssuesInnerIssueData

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerIssueData from a JSON string
list_all_aggregated_issues200_response_issues_inner_issue_data_instance = ListAllAggregatedIssues200ResponseIssuesInnerIssueData.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200ResponseIssuesInnerIssueData.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_issues_inner_issue_data_dict = list_all_aggregated_issues200_response_issues_inner_issue_data_instance.to_dict()
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerIssueData from a dict
list_all_aggregated_issues200_response_issues_inner_issue_data_from_dict = ListAllAggregatedIssues200ResponseIssuesInnerIssueData.from_dict(list_all_aggregated_issues200_response_issues_inner_issue_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


