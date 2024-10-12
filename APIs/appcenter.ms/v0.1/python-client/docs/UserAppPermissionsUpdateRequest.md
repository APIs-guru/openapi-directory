# UserAppPermissionsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The permissions the user has for the app | 

## Example

```python
from openapi_client.models.user_app_permissions_update_request import UserAppPermissionsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserAppPermissionsUpdateRequest from a JSON string
user_app_permissions_update_request_instance = UserAppPermissionsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(UserAppPermissionsUpdateRequest.to_json())

# convert the object into a dict
user_app_permissions_update_request_dict = user_app_permissions_update_request_instance.to_dict()
# create an instance of UserAppPermissionsUpdateRequest from a dict
user_app_permissions_update_request_from_dict = UserAppPermissionsUpdateRequest.from_dict(user_app_permissions_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


