# ProjectCountsFiltersFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**orgs** | **List[object]** | The list of org IDs to filter the results by | 
**projects** | **List[object]** | The list of project IDs to filter the results by, max projects allowed is 1000 | [optional] 

## Example

```python
from openapi_client.models.project_counts_filters_filters import ProjectCountsFiltersFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCountsFiltersFilters from a JSON string
project_counts_filters_filters_instance = ProjectCountsFiltersFilters.from_json(json)
# print the JSON string representation of the object
print(ProjectCountsFiltersFilters.to_json())

# convert the object into a dict
project_counts_filters_filters_dict = project_counts_filters_filters_instance.to_dict()
# create an instance of ProjectCountsFiltersFilters from a dict
project_counts_filters_filters_from_dict = ProjectCountsFiltersFilters.from_dict(project_counts_filters_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


