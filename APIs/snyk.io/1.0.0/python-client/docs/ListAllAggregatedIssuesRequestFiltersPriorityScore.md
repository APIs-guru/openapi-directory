# ListAllAggregatedIssuesRequestFiltersPriorityScore

Include issues where the priority score is between min and max

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **float** |  | [optional] 
**min** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues_request_filters_priority_score import ListAllAggregatedIssuesRequestFiltersPriorityScore

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssuesRequestFiltersPriorityScore from a JSON string
list_all_aggregated_issues_request_filters_priority_score_instance = ListAllAggregatedIssuesRequestFiltersPriorityScore.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssuesRequestFiltersPriorityScore.to_json())

# convert the object into a dict
list_all_aggregated_issues_request_filters_priority_score_dict = list_all_aggregated_issues_request_filters_priority_score_instance.to_dict()
# create an instance of ListAllAggregatedIssuesRequestFiltersPriorityScore from a dict
list_all_aggregated_issues_request_filters_priority_score_from_dict = ListAllAggregatedIssuesRequestFiltersPriorityScore.from_dict(list_all_aggregated_issues_request_filters_priority_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


