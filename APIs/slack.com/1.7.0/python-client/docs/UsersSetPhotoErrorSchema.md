# UsersSetPhotoErrorSchema

Schema for error response from users.setPhoto method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**debug_step** | **str** | possibly DEV/QA only | [optional] 
**dims** | **str** | possibly DEV/QA only | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 
**time_ident** | **int** | possibly DEV/QA only | [optional] 

## Example

```python
from openapi_client.models.users_set_photo_error_schema import UsersSetPhotoErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersSetPhotoErrorSchema from a JSON string
users_set_photo_error_schema_instance = UsersSetPhotoErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsersSetPhotoErrorSchema.to_json())

# convert the object into a dict
users_set_photo_error_schema_dict = users_set_photo_error_schema_instance.to_dict()
# create an instance of UsersSetPhotoErrorSchema from a dict
users_set_photo_error_schema_from_dict = UsersSetPhotoErrorSchema.from_dict(users_set_photo_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


