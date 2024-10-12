# ListAllAggregatedIssuesRequestFiltersPriority

The priority to filter the issues by (Non-IaC projects only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | [**ListAllAggregatedIssuesRequestFiltersPriorityScore**](ListAllAggregatedIssuesRequestFiltersPriorityScore.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues_request_filters_priority import ListAllAggregatedIssuesRequestFiltersPriority

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssuesRequestFiltersPriority from a JSON string
list_all_aggregated_issues_request_filters_priority_instance = ListAllAggregatedIssuesRequestFiltersPriority.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssuesRequestFiltersPriority.to_json())

# convert the object into a dict
list_all_aggregated_issues_request_filters_priority_dict = list_all_aggregated_issues_request_filters_priority_instance.to_dict()
# create an instance of ListAllAggregatedIssuesRequestFiltersPriority from a dict
list_all_aggregated_issues_request_filters_priority_from_dict = ListAllAggregatedIssuesRequestFiltersPriority.from_dict(list_all_aggregated_issues_request_filters_priority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


