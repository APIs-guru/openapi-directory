# GetProjectCountsRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | **List[object]** | The type of languages to filter the results by | [optional] 
**orgs** | **object** | The list of org IDs to filter the results by | 
**projects** | **object** | The list of project IDs to filter the results by, max projects allowed is 1000 | [optional] 

## Example

```python
from openapi_client.models.get_project_counts_request_filters import GetProjectCountsRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectCountsRequestFilters from a JSON string
get_project_counts_request_filters_instance = GetProjectCountsRequestFilters.from_json(json)
# print the JSON string representation of the object
print(GetProjectCountsRequestFilters.to_json())

# convert the object into a dict
get_project_counts_request_filters_dict = get_project_counts_request_filters_instance.to_dict()
# create an instance of GetProjectCountsRequestFilters from a dict
get_project_counts_request_filters_from_dict = GetProjectCountsRequestFilters.from_dict(get_project_counts_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


