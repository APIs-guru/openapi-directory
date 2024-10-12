# AppsPermissionsResourcesListSuccessSchema

Schema for successful response apps.permissions.resources.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**resources** | [**List[AppsPermissionsResourcesListSuccessSchemaResourcesInner]**](AppsPermissionsResourcesListSuccessSchemaResourcesInner.md) |  | 
**response_metadata** | [**AppsPermissionsResourcesListSuccessSchemaResponseMetadata**](AppsPermissionsResourcesListSuccessSchemaResponseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.apps_permissions_resources_list_success_schema import AppsPermissionsResourcesListSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsPermissionsResourcesListSuccessSchema from a JSON string
apps_permissions_resources_list_success_schema_instance = AppsPermissionsResourcesListSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(AppsPermissionsResourcesListSuccessSchema.to_json())

# convert the object into a dict
apps_permissions_resources_list_success_schema_dict = apps_permissions_resources_list_success_schema_instance.to_dict()
# create an instance of AppsPermissionsResourcesListSuccessSchema from a dict
apps_permissions_resources_list_success_schema_from_dict = AppsPermissionsResourcesListSuccessSchema.from_dict(apps_permissions_resources_list_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


