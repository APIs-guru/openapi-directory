# AppResponseInternalAllOfUserPermissions

the permissions for the specified app user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_response_internal_all_of_user_permissions import AppResponseInternalAllOfUserPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of AppResponseInternalAllOfUserPermissions from a JSON string
app_response_internal_all_of_user_permissions_instance = AppResponseInternalAllOfUserPermissions.from_json(json)
# print the JSON string representation of the object
print(AppResponseInternalAllOfUserPermissions.to_json())

# convert the object into a dict
app_response_internal_all_of_user_permissions_dict = app_response_internal_all_of_user_permissions_instance.to_dict()
# create an instance of AppResponseInternalAllOfUserPermissions from a dict
app_response_internal_all_of_user_permissions_from_dict = AppResponseInternalAllOfUserPermissions.from_dict(app_response_internal_all_of_user_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


