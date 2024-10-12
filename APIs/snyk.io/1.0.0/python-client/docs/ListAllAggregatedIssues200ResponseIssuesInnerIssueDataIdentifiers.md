# ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers

External identifiers assigned to the issue (Non-IaC projects only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cve** | **List[object]** | Common Vulnerability Enumeration identifiers | [optional] 
**cwe** | **List[object]** | Common Weakness Enumeration identifiers | [optional] 
**osvdb** | **List[object]** | Identifiers assigned by the Open Source Vulnerability Database (OSVDB) | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response_issues_inner_issue_data_identifiers import ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers from a JSON string
list_all_aggregated_issues200_response_issues_inner_issue_data_identifiers_instance = ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_issues_inner_issue_data_identifiers_dict = list_all_aggregated_issues200_response_issues_inner_issue_data_identifiers_instance.to_dict()
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers from a dict
list_all_aggregated_issues200_response_issues_inner_issue_data_identifiers_from_dict = ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers.from_dict(list_all_aggregated_issues200_response_issues_inner_issue_data_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


