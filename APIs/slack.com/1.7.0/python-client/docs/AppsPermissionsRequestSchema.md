# AppsPermissionsRequestSchema

Schema for successful response from apps.permissions.request method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.apps_permissions_request_schema import AppsPermissionsRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AppsPermissionsRequestSchema from a JSON string
apps_permissions_request_schema_instance = AppsPermissionsRequestSchema.from_json(json)
# print the JSON string representation of the object
print(AppsPermissionsRequestSchema.to_json())

# convert the object into a dict
apps_permissions_request_schema_dict = apps_permissions_request_schema_instance.to_dict()
# create an instance of AppsPermissionsRequestSchema from a dict
apps_permissions_request_schema_from_dict = AppsPermissionsRequestSchema.from_dict(apps_permissions_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


