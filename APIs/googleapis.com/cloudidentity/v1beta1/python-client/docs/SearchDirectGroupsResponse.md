# SearchDirectGroupsResponse

The response message for MembershipsService.SearchDirectGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[MembershipRelation]**](MembershipRelation.md) | List of direct groups satisfying the query. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results available for listing. | [optional] 

## Example

```python
from openapi_client.models.search_direct_groups_response import SearchDirectGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchDirectGroupsResponse from a JSON string
search_direct_groups_response_instance = SearchDirectGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchDirectGroupsResponse.to_json())

# convert the object into a dict
search_direct_groups_response_dict = search_direct_groups_response_instance.to_dict()
# create an instance of SearchDirectGroupsResponse from a dict
search_direct_groups_response_from_dict = SearchDirectGroupsResponse.from_dict(search_direct_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


