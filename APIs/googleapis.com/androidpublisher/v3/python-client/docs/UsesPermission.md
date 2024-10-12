# UsesPermission

A permission used by this APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_sdk_version** | **int** | Optionally, the maximum SDK version for which the permission is required. | [optional] 
**name** | **str** | The name of the permission requested. | [optional] 

## Example

```python
from openapi_client.models.uses_permission import UsesPermission

# TODO update the JSON string below
json = "{}"
# create an instance of UsesPermission from a JSON string
uses_permission_instance = UsesPermission.from_json(json)
# print the JSON string representation of the object
print(UsesPermission.to_json())

# convert the object into a dict
uses_permission_dict = uses_permission_instance.to_dict()
# create an instance of UsesPermission from a dict
uses_permission_from_dict = UsesPermission.from_dict(uses_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


