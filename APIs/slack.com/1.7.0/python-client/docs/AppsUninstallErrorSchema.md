# AppsUninstallErrorSchema

Schema for error response from apps.uninstall method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.apps_uninstall_error_schema import AppsUninstallErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsUninstallErrorSchema from a JSON string
apps_uninstall_error_schema_instance = AppsUninstallErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AppsUninstallErrorSchema.to_json())

# convert the object into a dict
apps_uninstall_error_schema_dict = apps_uninstall_error_schema_instance.to_dict()
# create an instance of AppsUninstallErrorSchema from a dict
apps_uninstall_error_schema_from_dict = AppsUninstallErrorSchema.from_dict(apps_uninstall_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


