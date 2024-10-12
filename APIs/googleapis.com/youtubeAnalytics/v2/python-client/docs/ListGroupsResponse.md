# ListGroupsResponse

Response message for GroupsService.ListGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Errors**](Errors.md) |  | [optional] 
**etag** | **str** | The Etag of this resource. | [optional] 
**items** | [**List[Group]**](Group.md) | A list of groups that match the API request parameters. Each item in the list represents a &#x60;group&#x60; resource. | [optional] 
**kind** | **str** | Identifies the API resource&#39;s type. The value will be &#x60;youtube#groupListResponse&#x60;. | [optional] 
**next_page_token** | **str** | The token that can be used as the value of the &#x60;pageToken&#x60; parameter to retrieve the next page in the result set. | [optional] 

## Example

```python
from openapi_client.models.list_groups_response import ListGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGroupsResponse from a JSON string
list_groups_response_instance = ListGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListGroupsResponse.to_json())

# convert the object into a dict
list_groups_response_dict = list_groups_response_instance.to_dict()
# create an instance of ListGroupsResponse from a dict
list_groups_response_from_dict = ListGroupsResponse.from_dict(list_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


