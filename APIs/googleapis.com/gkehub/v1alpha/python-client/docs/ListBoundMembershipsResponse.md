# ListBoundMembershipsResponse

List of Memberships bound to a Scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[Membership]**](Membership.md) | The list of Memberships bound to the given Scope. | [optional] 
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListBoundMemberships&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**unreachable** | **List[str]** | List of locations that could not be reached while fetching this list. | [optional] 

## Example

```python
from openapi_client.models.list_bound_memberships_response import ListBoundMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBoundMembershipsResponse from a JSON string
list_bound_memberships_response_instance = ListBoundMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBoundMembershipsResponse.to_json())

# convert the object into a dict
list_bound_memberships_response_dict = list_bound_memberships_response_instance.to_dict()
# create an instance of ListBoundMembershipsResponse from a dict
list_bound_memberships_response_from_dict = ListBoundMembershipsResponse.from_dict(list_bound_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


