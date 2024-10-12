# AppsPermissionsInfoSchemaInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_home** | [**AppsPermissionsInfoSchemaInfoAppHome**](AppsPermissionsInfoSchemaInfoAppHome.md) |  | 
**channel** | [**AppsPermissionsInfoSchemaInfoAppHome**](AppsPermissionsInfoSchemaInfoAppHome.md) |  | 
**group** | [**AppsPermissionsInfoSchemaInfoAppHome**](AppsPermissionsInfoSchemaInfoAppHome.md) |  | 
**im** | [**AppsPermissionsInfoSchemaInfoAppHome**](AppsPermissionsInfoSchemaInfoAppHome.md) |  | 
**mpim** | [**AppsPermissionsInfoSchemaInfoAppHome**](AppsPermissionsInfoSchemaInfoAppHome.md) |  | 
**team** | [**AppsPermissionsInfoSchemaInfoTeam**](AppsPermissionsInfoSchemaInfoTeam.md) |  | 

## Example

```python
from openapi_client.models.apps_permissions_info_schema_info import AppsPermissionsInfoSchemaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppsPermissionsInfoSchemaInfo from a JSON string
apps_permissions_info_schema_info_instance = AppsPermissionsInfoSchemaInfo.from_json(json)
# print the JSON string representation of the object
print(AppsPermissionsInfoSchemaInfo.to_json())

# convert the object into a dict
apps_permissions_info_schema_info_dict = apps_permissions_info_schema_info_instance.to_dict()
# create an instance of AppsPermissionsInfoSchemaInfo from a dict
apps_permissions_info_schema_info_from_dict = AppsPermissionsInfoSchemaInfo.from_dict(apps_permissions_info_schema_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


