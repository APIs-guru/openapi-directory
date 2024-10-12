# ListAllAggregatedIssues200ResponseIssuesInnerPriority

Information about the priority of the issue (Non-IaC projects only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factors** | **List[object]** | The list of factors that contributed to the priority of the issue | [optional] 
**score** | **float** | The priority score of the issue | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response_issues_inner_priority import ListAllAggregatedIssues200ResponseIssuesInnerPriority

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerPriority from a JSON string
list_all_aggregated_issues200_response_issues_inner_priority_instance = ListAllAggregatedIssues200ResponseIssuesInnerPriority.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200ResponseIssuesInnerPriority.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_issues_inner_priority_dict = list_all_aggregated_issues200_response_issues_inner_priority_instance.to_dict()
# create an instance of ListAllAggregatedIssues200ResponseIssuesInnerPriority from a dict
list_all_aggregated_issues200_response_issues_inner_priority_from_dict = ListAllAggregatedIssues200ResponseIssuesInnerPriority.from_dict(list_all_aggregated_issues200_response_issues_inner_priority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


