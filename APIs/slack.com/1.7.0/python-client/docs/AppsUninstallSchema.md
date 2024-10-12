# AppsUninstallSchema

Schema for successful response from apps.uninstall method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.apps_uninstall_schema import AppsUninstallSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsUninstallSchema from a JSON string
apps_uninstall_schema_instance = AppsUninstallSchema.from_json(json)
# print the JSON string representation of the object
print(AppsUninstallSchema.to_json())

# convert the object into a dict
apps_uninstall_schema_dict = apps_uninstall_schema_instance.to_dict()
# create an instance of AppsUninstallSchema from a dict
apps_uninstall_schema_from_dict = AppsUninstallSchema.from_dict(apps_uninstall_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


