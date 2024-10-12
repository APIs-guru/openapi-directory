# ListGroupsResponse

The ListGroups response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**List[Group]**](Group.md) | The groups that match the specified filters. | [optional] 
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 

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


