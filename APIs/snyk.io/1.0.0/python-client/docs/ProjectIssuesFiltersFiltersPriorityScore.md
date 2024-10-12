# ProjectIssuesFiltersFiltersPriorityScore

Include issues that have a priority score between `min` and `max`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **float** |  | [optional] 
**min** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.project_issues_filters_filters_priority_score import ProjectIssuesFiltersFiltersPriorityScore

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssuesFiltersFiltersPriorityScore from a JSON string
project_issues_filters_filters_priority_score_instance = ProjectIssuesFiltersFiltersPriorityScore.from_json(json)
# print the JSON string representation of the object
print(ProjectIssuesFiltersFiltersPriorityScore.to_json())

# convert the object into a dict
project_issues_filters_filters_priority_score_dict = project_issues_filters_filters_priority_score_instance.to_dict()
# create an instance of ProjectIssuesFiltersFiltersPriorityScore from a dict
project_issues_filters_filters_priority_score_from_dict = ProjectIssuesFiltersFiltersPriorityScore.from_dict(project_issues_filters_filters_priority_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


