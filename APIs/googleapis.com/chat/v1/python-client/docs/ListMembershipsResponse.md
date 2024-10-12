# ListMembershipsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[Membership]**](Membership.md) | Unordered list. List of memberships in the requested (or first) page. | [optional] 
**next_page_token** | **str** | A token that you can send as &#x60;pageToken&#x60; to retrieve the next page of results. If empty, there are no subsequent pages. | [optional] 

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


