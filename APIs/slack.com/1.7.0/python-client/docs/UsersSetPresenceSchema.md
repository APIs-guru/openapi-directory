# UsersSetPresenceSchema

Schema for successful response from users.setPresence method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_set_presence_schema import UsersSetPresenceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersSetPresenceSchema from a JSON string
users_set_presence_schema_instance = UsersSetPresenceSchema.from_json(json)
# print the JSON string representation of the object
print(UsersSetPresenceSchema.to_json())

# convert the object into a dict
users_set_presence_schema_dict = users_set_presence_schema_instance.to_dict()
# create an instance of UsersSetPresenceSchema from a dict
users_set_presence_schema_from_dict = UsersSetPresenceSchema.from_dict(users_set_presence_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


