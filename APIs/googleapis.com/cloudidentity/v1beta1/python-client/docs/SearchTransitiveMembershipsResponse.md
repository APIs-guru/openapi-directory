# SearchTransitiveMembershipsResponse

The response message for MembershipsService.SearchTransitiveMemberships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[MemberRelation]**](MemberRelation.md) | List of transitive memberships satisfying the query. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.search_transitive_memberships_response import SearchTransitiveMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTransitiveMembershipsResponse from a JSON string
search_transitive_memberships_response_instance = SearchTransitiveMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchTransitiveMembershipsResponse.to_json())

# convert the object into a dict
search_transitive_memberships_response_dict = search_transitive_memberships_response_instance.to_dict()
# create an instance of SearchTransitiveMembershipsResponse from a dict
search_transitive_memberships_response_from_dict = SearchTransitiveMembershipsResponse.from_dict(search_transitive_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


