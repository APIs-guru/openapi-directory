# AppUserPermissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The unique id (UUID) of the app | 
**app_origin** | **str** | The creation origin of this app | 
**app_secret** | **str** | A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics | 
**permissions** | **List[str]** | The permissions the user has for the app | 
**user_email** | **str** | The email of the user | 
**user_id** | **str** | The unique id (UUID) of the user | 

## Example

```python
from openapi_client.models.app_user_permission_response import AppUserPermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppUserPermissionResponse from a JSON string
app_user_permission_response_instance = AppUserPermissionResponse.from_json(json)
# print the JSON string representation of the object
print(AppUserPermissionResponse.to_json())

# convert the object into a dict
app_user_permission_response_dict = app_user_permission_response_instance.to_dict()
# create an instance of AppUserPermissionResponse from a dict
app_user_permission_response_from_dict = AppUserPermissionResponse.from_dict(app_user_permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


