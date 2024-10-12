# ListMembershipsResponse

The response message for MembershipsService.ListMemberships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberships** | [**List[Membership]**](Membership.md) | The &#x60;Membership&#x60;s under the specified &#x60;parent&#x60;. | [optional] 
**next_page_token** | **str** | A continuation token to retrieve the next page of results, or empty if there are no more results available. | [optional] 

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


