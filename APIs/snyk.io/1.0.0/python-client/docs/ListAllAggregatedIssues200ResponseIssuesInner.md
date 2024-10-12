# ListAllAggregatedIssues200ResponseIssuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fix_info** | [**ListAllAggregatedIssues200ResponseIssuesInnerFixInfo**](ListAllAggregatedIssues200ResponseIssuesInnerFixInfo.md) |  | [optional] 
**id** | **str** | The identifier of the issue | 
**ignore_reasons** | **List[object]** | The list of reasons why the issue was ignored | [optional] 
**introduced_through** | **List[object]** | The list of what introduced the issue (it is available only for container project with Dockerfile) | [optional] 
**is_ignored** | **bool** | Whether the issue has been ignored | 
**is_patched** | **bool** | Whether the issue has been patched (Non-IaC projects only) | 
**issue_data** | [**ListAllAggregatedIssues200ResponseIssuesInnerIssueData**](ListAllAggregatedIssues200ResponseIssuesInnerIssueData.md) |  | 
**issue_type** | **str** | type of the issue (&#39;vuln&#39;, &#39;license&#39; or &#39;configuration&#39;) | 
**links** | [**ListAllAggregatedIssues200ResponseIssuesInnerLinks**](ListAllAggregatedIssues200ResponseIssuesInnerLinks.md) |  | [optional] 
**pkg_name** | **str** | The package name (Non-IaC projects only) | 
**pkg_versions** | **List[str]** | List of affected package versions (Non-IaC projects only) | 
**priority** | [**ListAllAggregatedIssues200ResponseIssuesInnerPriority**](ListAllAggregatedIssues200ResponseIssuesInnerPriority.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response_issues_inner import ListAllAggregatedIssues200ResponseIssuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200ResponseIssuesInner from a JSON string
list_all_aggregated_issues200_response_issues_inner_instance = ListAllAggregatedIssues200ResponseIssuesInner.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200ResponseIssuesInner.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_issues_inner_dict = list_all_aggregated_issues200_response_issues_inner_instance.to_dict()
# create an instance of ListAllAggregatedIssues200ResponseIssuesInner from a dict
list_all_aggregated_issues200_response_issues_inner_from_dict = ListAllAggregatedIssues200ResponseIssuesInner.from_dict(list_all_aggregated_issues200_response_issues_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


