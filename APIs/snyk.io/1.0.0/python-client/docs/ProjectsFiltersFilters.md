# ProjectsFiltersFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ProjectAttributes**](ProjectAttributes.md) |  | [optional] 
**is_monitored** | **bool** | If set to &#x60;true&#x60;, only include projects which are monitored, if set to &#x60;false&#x60;, only include projects which are not monitored | [optional] 
**name** | **str** | If supplied, only projects that have a name that **starts with** this value will be returned | [optional] 
**origin** | **str** | If supplied, only projects that exactly match this origin will be returned | [optional] 
**tags** | [**ListAllProjectsRequestFiltersTags**](ListAllProjectsRequestFiltersTags.md) |  | [optional] 
**type** | **str** | If supplied, only projects that exactly match this type will be returned | [optional] 

## Example

```python
from openapi_client.models.projects_filters_filters import ProjectsFiltersFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsFiltersFilters from a JSON string
projects_filters_filters_instance = ProjectsFiltersFilters.from_json(json)
# print the JSON string representation of the object
print(ProjectsFiltersFilters.to_json())

# convert the object into a dict
projects_filters_filters_dict = projects_filters_filters_instance.to_dict()
# create an instance of ProjectsFiltersFilters from a dict
projects_filters_filters_from_dict = ProjectsFiltersFilters.from_dict(projects_filters_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


