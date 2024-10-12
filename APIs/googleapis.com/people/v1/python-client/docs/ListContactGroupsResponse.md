# ListContactGroupsResponse

The response to a list contact groups request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_groups** | [**List[ContactGroup]**](ContactGroup.md) | The list of contact groups. Members of the contact groups are not populated. | [optional] 
**next_page_token** | **str** | The token that can be used to retrieve the next page of results. | [optional] 
**next_sync_token** | **str** | The token that can be used to retrieve changes since the last request. | [optional] 
**total_items** | **int** | The total number of items in the list without pagination. | [optional] 

## Example

```python
from openapi_client.models.list_contact_groups_response import ListContactGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactGroupsResponse from a JSON string
list_contact_groups_response_instance = ListContactGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactGroupsResponse.to_json())

# convert the object into a dict
list_contact_groups_response_dict = list_contact_groups_response_instance.to_dict()
# create an instance of ListContactGroupsResponse from a dict
list_contact_groups_response_from_dict = ListContactGroupsResponse.from_dict(list_contact_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


