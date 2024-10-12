# AppsPermissionsInfoSchema

Schema for successful response from apps.permissions.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**AppsPermissionsInfoSchemaInfo**](AppsPermissionsInfoSchemaInfo.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.apps_permissions_info_schema import AppsPermissionsInfoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsPermissionsInfoSchema from a JSON string
apps_permissions_info_schema_instance = AppsPermissionsInfoSchema.from_json(json)
# print the JSON string representation of the object
print(AppsPermissionsInfoSchema.to_json())

# convert the object into a dict
apps_permissions_info_schema_dict = apps_permissions_info_schema_instance.to_dict()
# create an instance of AppsPermissionsInfoSchema from a dict
apps_permissions_info_schema_from_dict = AppsPermissionsInfoSchema.from_dict(apps_permissions_info_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


