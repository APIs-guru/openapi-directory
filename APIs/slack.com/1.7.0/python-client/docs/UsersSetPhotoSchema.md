# UsersSetPhotoSchema

Schema for successful response from users.setPhoto method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**profile** | [**UsersSetPhotoSchemaProfile**](UsersSetPhotoSchemaProfile.md) |  | 

## Example

```python
from openapi_client.models.users_set_photo_schema import UsersSetPhotoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersSetPhotoSchema from a JSON string
users_set_photo_schema_instance = UsersSetPhotoSchema.from_json(json)
# print the JSON string representation of the object
print(UsersSetPhotoSchema.to_json())

# convert the object into a dict
users_set_photo_schema_dict = users_set_photo_schema_instance.to_dict()
# create an instance of UsersSetPhotoSchema from a dict
users_set_photo_schema_from_dict = UsersSetPhotoSchema.from_dict(users_set_photo_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


