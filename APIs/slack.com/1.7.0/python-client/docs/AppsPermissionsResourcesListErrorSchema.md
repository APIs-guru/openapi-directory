# AppsPermissionsResourcesListErrorSchema

Schema for error response from apps.permissions.resources.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.apps_permissions_resources_list_error_schema import AppsPermissionsResourcesListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsPermissionsResourcesListErrorSchema from a JSON string
apps_permissions_resources_list_error_schema_instance = AppsPermissionsResourcesListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AppsPermissionsResourcesListErrorSchema.to_json())

# convert the object into a dict
apps_permissions_resources_list_error_schema_dict = apps_permissions_resources_list_error_schema_instance.to_dict()
# create an instance of AppsPermissionsResourcesListErrorSchema from a dict
apps_permissions_resources_list_error_schema_from_dict = AppsPermissionsResourcesListErrorSchema.from_dict(apps_permissions_resources_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


