# FoundUsers

The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | Header text indicating the number of users in the response and the total number of users found in the search. | [optional] 
**total** | **int** | The total number of users found in the search. | [optional] 
**users** | [**List[UserPickerUser]**](UserPickerUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.found_users import FoundUsers

# TODO update the JSON string below
json = "{}"
# create an instance of FoundUsers from a JSON string
found_users_instance = FoundUsers.from_json(json)
# print the JSON string representation of the object
print(FoundUsers.to_json())

# convert the object into a dict
found_users_dict = found_users_instance.to_dict()
# create an instance of FoundUsers from a dict
found_users_from_dict = FoundUsers.from_dict(found_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


