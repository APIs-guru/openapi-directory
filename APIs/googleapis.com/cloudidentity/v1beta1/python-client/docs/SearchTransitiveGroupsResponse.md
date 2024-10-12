# SearchTransitiveGroupsResponse

The response message for MembershipsService.SearchTransitiveGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[GroupRelation]**](GroupRelation.md) | List of transitive groups satisfying the query. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results available for listing. | [optional] 

## Example

```python
from openapi_client.models.search_transitive_groups_response import SearchTransitiveGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTransitiveGroupsResponse from a JSON string
search_transitive_groups_response_instance = SearchTransitiveGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchTransitiveGroupsResponse.to_json())

# convert the object into a dict
search_transitive_groups_response_dict = search_transitive_groups_response_instance.to_dict()
# create an instance of SearchTransitiveGroupsResponse from a dict
search_transitive_groups_response_from_dict = SearchTransitiveGroupsResponse.from_dict(search_transitive_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


