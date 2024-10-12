# AppsUpdateUserPermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The permissions the user has for the app | 

## Example

```python
from openapi_client.models.apps_update_user_permissions_request import AppsUpdateUserPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppsUpdateUserPermissionsRequest from a JSON string
apps_update_user_permissions_request_instance = AppsUpdateUserPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(AppsUpdateUserPermissionsRequest.to_json())

# convert the object into a dict
apps_update_user_permissions_request_dict = apps_update_user_permissions_request_instance.to_dict()
# create an instance of AppsUpdateUserPermissionsRequest from a dict
apps_update_user_permissions_request_from_dict = AppsUpdateUserPermissionsRequest.from_dict(apps_update_user_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


