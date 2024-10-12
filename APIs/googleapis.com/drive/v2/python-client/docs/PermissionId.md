# PermissionId

An ID for a user or group as seen in Permission items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The permission ID. | [optional] 
**kind** | **str** | This is always &#x60;drive#permissionId&#x60;. | [optional] [default to 'drive#permissionId']

## Example

```python
from openapi_client.models.permission_id import PermissionId

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionId from a JSON string
permission_id_instance = PermissionId.from_json(json)
# print the JSON string representation of the object
print(PermissionId.to_json())

# convert the object into a dict
permission_id_dict = permission_id_instance.to_dict()
# create an instance of PermissionId from a dict
permission_id_from_dict = PermissionId.from_dict(permission_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


