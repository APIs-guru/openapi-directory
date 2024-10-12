# ProjectCountsFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ProjectCountsFiltersFilters**](ProjectCountsFiltersFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_counts_filters import ProjectCountsFilters

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCountsFilters from a JSON string
project_counts_filters_instance = ProjectCountsFilters.from_json(json)
# print the JSON string representation of the object
print(ProjectCountsFilters.to_json())

# convert the object into a dict
project_counts_filters_dict = project_counts_filters_instance.to_dict()
# create an instance of ProjectCountsFilters from a dict
project_counts_filters_from_dict = ProjectCountsFilters.from_dict(project_counts_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


