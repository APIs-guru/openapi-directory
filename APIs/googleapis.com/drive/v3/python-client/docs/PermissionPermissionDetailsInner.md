# PermissionPermissionDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inherited** | **bool** | Output only. Whether this permission is inherited. This field is always populated. This is an output-only field. | [optional] 
**inherited_from** | **str** | Output only. The ID of the item from which this permission is inherited. This is an output-only field. | [optional] 
**permission_type** | **str** | Output only. The permission type for this user. While new values may be added in future, the following are currently possible: * &#x60;file&#x60; * &#x60;member&#x60; | [optional] 
**role** | **str** | Output only. The primary role for this user. While new values may be added in the future, the following are currently possible: * &#x60;organizer&#x60; * &#x60;fileOrganizer&#x60; * &#x60;writer&#x60; * &#x60;commenter&#x60; * &#x60;reader&#x60; | [optional] 

## Example

```python
from openapi_client.models.permission_permission_details_inner import PermissionPermissionDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionPermissionDetailsInner from a JSON string
permission_permission_details_inner_instance = PermissionPermissionDetailsInner.from_json(json)
# print the JSON string representation of the object
print(PermissionPermissionDetailsInner.to_json())

# convert the object into a dict
permission_permission_details_inner_dict = permission_permission_details_inner_instance.to_dict()
# create an instance of PermissionPermissionDetailsInner from a dict
permission_permission_details_inner_from_dict = PermissionPermissionDetailsInner.from_dict(permission_permission_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


