# PermissionHolder

Details of a user, group, field, or project role that holds a permission. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Expand options that include additional permission holder details in the response. | [optional] [readonly] 
**parameter** | **str** | As a group&#39;s name can change, use of &#x60;value&#x60; is recommended. The identifier associated withthe &#x60;type&#x60; value that defines the holder of the permission. | [optional] 
**type** | **str** | The type of permission holder. | 
**value** | **str** | The identifier associated with the &#x60;type&#x60; value that defines the holder of the permission. | [optional] 

## Example

```python
from openapi_client.models.permission_holder import PermissionHolder

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionHolder from a JSON string
permission_holder_instance = PermissionHolder.from_json(json)
# print the JSON string representation of the object
print(PermissionHolder.to_json())

# convert the object into a dict
permission_holder_dict = permission_holder_instance.to_dict()
# create an instance of PermissionHolder from a dict
permission_holder_from_dict = PermissionHolder.from_dict(permission_holder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


