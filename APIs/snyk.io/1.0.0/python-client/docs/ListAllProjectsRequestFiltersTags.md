# ListAllProjectsRequestFiltersTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**includes** | **List[object]** | A project must have all provided tags in order to be included in the response. A maximum of 3 tags can be supplied. | [optional] 

## Example

```python
from openapi_client.models.list_all_projects_request_filters_tags import ListAllProjectsRequestFiltersTags

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectsRequestFiltersTags from a JSON string
list_all_projects_request_filters_tags_instance = ListAllProjectsRequestFiltersTags.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectsRequestFiltersTags.to_json())

# convert the object into a dict
list_all_projects_request_filters_tags_dict = list_all_projects_request_filters_tags_instance.to_dict()
# create an instance of ListAllProjectsRequestFiltersTags from a dict
list_all_projects_request_filters_tags_from_dict = ListAllProjectsRequestFiltersTags.from_dict(list_all_projects_request_filters_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


