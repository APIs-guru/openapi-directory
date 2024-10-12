# AdminUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date the admin user was created | [optional] 
**email** | **str** | Admin User email address | [optional] 
**id** | **int** |  | [optional] 
**modified_date** | **str** | The date the admin user was modified | [optional] 
**name** | **str** | Admin User name | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_user_response import AdminUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUserResponse from a JSON string
admin_user_response_instance = AdminUserResponse.from_json(json)
# print the JSON string representation of the object
print(AdminUserResponse.to_json())

# convert the object into a dict
admin_user_response_dict = admin_user_response_instance.to_dict()
# create an instance of AdminUserResponse from a dict
admin_user_response_from_dict = AdminUserResponse.from_dict(admin_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


