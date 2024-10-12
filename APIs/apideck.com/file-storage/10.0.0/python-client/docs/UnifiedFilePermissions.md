# UnifiedFilePermissions

Permissions the current user has on this file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download** | **bool** | Whether the current user can download this file. | [optional] 

## Example

```python
from openapi_client.models.unified_file_permissions import UnifiedFilePermissions

# TODO update the JSON string below
json = "{}"
# create an instance of UnifiedFilePermissions from a JSON string
unified_file_permissions_instance = UnifiedFilePermissions.from_json(json)
# print the JSON string representation of the object
print(UnifiedFilePermissions.to_json())

# convert the object into a dict
unified_file_permissions_dict = unified_file_permissions_instance.to_dict()
# create an instance of UnifiedFilePermissions from a dict
unified_file_permissions_from_dict = UnifiedFilePermissions.from_dict(unified_file_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


