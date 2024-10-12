# SearchGroupsResponse

The response message for GroupsService.SearchGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[Group]**](Group.md) | The &#x60;Group&#x60; resources that match the search query. | [optional] 
**next_page_token** | **str** | A continuation token to retrieve the next page of results, or empty if there are no more results available. | [optional] 

## Example

```python
from openapi_client.models.search_groups_response import SearchGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGroupsResponse from a JSON string
search_groups_response_instance = SearchGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchGroupsResponse.to_json())

# convert the object into a dict
search_groups_response_dict = search_groups_response_instance.to_dict()
# create an instance of SearchGroupsResponse from a dict
search_groups_response_from_dict = SearchGroupsResponse.from_dict(search_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


