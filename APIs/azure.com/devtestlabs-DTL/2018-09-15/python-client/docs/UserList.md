# UserList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[User]**](User.md) | Results of the list operation. | [optional] 

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


