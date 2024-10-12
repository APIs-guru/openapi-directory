# ProjectIssuesFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ProjectIssuesFiltersFilters**](ProjectIssuesFiltersFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_issues_filters import ProjectIssuesFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssuesFilters from a JSON string
project_issues_filters_instance = ProjectIssuesFilters.from_json(json)
# print the JSON string representation of the object
print(ProjectIssuesFilters.to_json())

# convert the object into a dict
project_issues_filters_dict = project_issues_filters_instance.to_dict()
# create an instance of ProjectIssuesFilters from a dict
project_issues_filters_from_dict = ProjectIssuesFilters.from_dict(project_issues_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


