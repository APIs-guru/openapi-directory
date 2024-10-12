# ProjectIssuesFiltersFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exploit_maturity** | **List[object]** | The exploit maturity levels of issues to filter the results by | [optional] 
**ignored** | **bool** | If set to &#x60;true&#x60;, only include issues which are ignored, if set to &#x60;false&#x60;, only include issues which are not ignored | [optional] 
**patched** | **bool** | If set to &#x60;true&#x60;, only include issues which are patched, if set to &#x60;false&#x60;, only include issues which are not patched | [optional] 
**priority_score** | [**ProjectIssuesFiltersFiltersPriorityScore**](ProjectIssuesFiltersFiltersPriorityScore.md) |  | [optional] 
**severities** | **List[object]** | The severity levels of issues to filter the results by | [optional] 
**types** | **List[object]** | The type of issues to filter the results by | [optional] 

## Example

```python
from openapi_client.models.project_issues_filters_filters import ProjectIssuesFiltersFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssuesFiltersFilters from a JSON string
project_issues_filters_filters_instance = ProjectIssuesFiltersFilters.from_json(json)
# print the JSON string representation of the object
print(ProjectIssuesFiltersFilters.to_json())

# convert the object into a dict
project_issues_filters_filters_dict = project_issues_filters_filters_instance.to_dict()
# create an instance of ProjectIssuesFiltersFilters from a dict
project_issues_filters_filters_from_dict = ProjectIssuesFiltersFilters.from_dict(project_issues_filters_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


