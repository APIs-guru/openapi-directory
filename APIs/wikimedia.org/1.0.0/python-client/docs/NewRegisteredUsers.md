# NewRegisteredUsers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[NewRegisteredUsersItemsInner]**](NewRegisteredUsersItemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_registered_users import NewRegisteredUsers

# TODO update the JSON string below
json = "{}"
# create an instance of NewRegisteredUsers from a JSON string
new_registered_users_instance = NewRegisteredUsers.from_json(json)
# print the JSON string representation of the object
print(NewRegisteredUsers.to_json())

# convert the object into a dict
new_registered_users_dict = new_registered_users_instance.to_dict()
# create an instance of NewRegisteredUsers from a dict
new_registered_users_from_dict = NewRegisteredUsers.from_dict(new_registered_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


