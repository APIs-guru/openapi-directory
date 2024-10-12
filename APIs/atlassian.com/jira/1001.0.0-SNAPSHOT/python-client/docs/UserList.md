# UserList

A paginated list of users sharing the filter. This includes users that are members of the groups or can browse the projects that the filter is shared with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The index of the last item returned on the page. | [optional] [readonly] 
**items** | [**List[User]**](User.md) | The list of items. | [optional] [readonly] 
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**size** | **int** | The number of items on the page. | [optional] [readonly] 
**start_index** | **int** | The index of the first item returned on the page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_list import UserList

# TODO update the JSON string below
json = "{}"
# create an instance of UserList from a JSON string
user_list_instance = UserList.from_json(json)
# print the JSON string representation of the object
print(UserList.to_json())

# convert the object into a dict
user_list_dict = user_list_instance.to_dict()
# create an instance of UserList from a dict
user_list_from_dict = UserList.from_dict(user_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


