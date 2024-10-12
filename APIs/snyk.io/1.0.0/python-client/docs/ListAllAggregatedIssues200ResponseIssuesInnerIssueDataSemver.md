# ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver

The ranges that are vulnerable and unaffected by the issue (Non-IaC projects only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unaffected** | **str** | The ranges that are unaffected by the issue | [optional] 
**vulnerable** | **List[object]** | The ranges that are vulnerable to the issue. May be an array or a string. | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response_issues_inner_issue_data_semver import ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver from a JSON string
list_all_aggregated_issues200_response_issues_inner_issue_data_semver_instance = ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_issues_inner_issue_data_semver_dict = list_all_aggregated_issues200_response_issues_inner_issue_data_semver_instance.to_dict()
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver from a dict
list_all_aggregated_issues200_response_issues_inner_issue_data_semver_from_dict = ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver.from_dict(list_all_aggregated_issues200_response_issues_inner_issue_data_semver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


