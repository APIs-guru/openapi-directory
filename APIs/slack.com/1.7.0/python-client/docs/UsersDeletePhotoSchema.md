# UsersDeletePhotoSchema

Schema for successful response from users.deletePhoto method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_delete_photo_schema import UsersDeletePhotoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersDeletePhotoSchema from a JSON string
users_delete_photo_schema_instance = UsersDeletePhotoSchema.from_json(json)
# print the JSON string representation of the object
print(UsersDeletePhotoSchema.to_json())

# convert the object into a dict
users_delete_photo_schema_dict = users_delete_photo_schema_instance.to_dict()
# create an instance of UsersDeletePhotoSchema from a dict
users_delete_photo_schema_from_dict = UsersDeletePhotoSchema.from_dict(users_delete_photo_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


