# ListGroupMembersResponse

The ListGroupMembers response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[MonitoredResource]**](MonitoredResource.md) | A set of monitored resources in the group. | [optional] 
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 
**total_size** | **int** | The total number of elements matching this request. | [optional] 

## Example

```python
from openapi_client.models.list_group_members_response import ListGroupMembersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGroupMembersResponse from a JSON string
list_group_members_response_instance = ListGroupMembersResponse.from_json(json)
# print the JSON string representation of the object
print(ListGroupMembersResponse.to_json())

# convert the object into a dict
list_group_members_response_dict = list_group_members_response_instance.to_dict()
# create an instance of ListGroupMembersResponse from a dict
list_group_members_response_from_dict = ListGroupMembersResponse.from_dict(list_group_members_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


