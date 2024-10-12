# AppsPermissionsRequestErrorSchema

Schema for error response from apps.permissions.request method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.apps_permissions_request_error_schema import AppsPermissionsRequestErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsPermissionsRequestErrorSchema from a JSON string
apps_permissions_request_error_schema_instance = AppsPermissionsRequestErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AppsPermissionsRequestErrorSchema.to_json())

# convert the object into a dict
apps_permissions_request_error_schema_dict = apps_permissions_request_error_schema_instance.to_dict()
# create an instance of AppsPermissionsRequestErrorSchema from a dict
apps_permissions_request_error_schema_from_dict = AppsPermissionsRequestErrorSchema.from_dict(apps_permissions_request_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


