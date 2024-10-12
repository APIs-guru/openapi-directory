# ListAllProjectsRequestFiltersAttributes

When you filter by multiple values on a single attribute, you will return projects that have been assigned one or more of the values in the filter.  When you filter by multiple attributes, you will return projects which have been assigned values of both attributes in the filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criticality** | **List[object]** |  | [optional] 
**environment** | **List[object]** |  | [optional] 
**lifecycle** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.list_all_projects_request_filters_attributes import ListAllProjectsRequestFiltersAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectsRequestFiltersAttributes from a JSON string
list_all_projects_request_filters_attributes_instance = ListAllProjectsRequestFiltersAttributes.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectsRequestFiltersAttributes.to_json())

# convert the object into a dict
list_all_projects_request_filters_attributes_dict = list_all_projects_request_filters_attributes_instance.to_dict()
# create an instance of ListAllProjectsRequestFiltersAttributes from a dict
list_all_projects_request_filters_attributes_from_dict = ListAllProjectsRequestFiltersAttributes.from_dict(list_all_projects_request_filters_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


