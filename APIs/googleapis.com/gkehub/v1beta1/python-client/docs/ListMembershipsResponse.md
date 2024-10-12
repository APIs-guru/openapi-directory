# ListMembershipsResponse

Response message for the `GkeHubMembershipService.ListMemberships` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListMemberships&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**resources** | [**List[Membership]**](Membership.md) | The list of matching Memberships. | [optional] 
**unreachable** | **List[str]** | List of locations that could not be reached while fetching this list. | [optional] 

## Example

```python
from openapi_client.models.list_memberships_response import ListMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMembershipsResponse from a JSON string
list_memberships_response_instance = ListMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMembershipsResponse.to_json())

# convert the object into a dict
list_memberships_response_dict = list_memberships_response_instance.to_dict()
# create an instance of ListMembershipsResponse from a dict
list_memberships_response_from_dict = ListMembershipsResponse.from_dict(list_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


