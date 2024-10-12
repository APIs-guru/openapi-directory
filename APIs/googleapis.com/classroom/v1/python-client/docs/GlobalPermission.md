# GlobalPermission

Global user permission description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission** | **str** | Permission value. | [optional] 

## Example

```python
from openapi_client.models.global_permission import GlobalPermission

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalPermission from a JSON string
global_permission_instance = GlobalPermission.from_json(json)
# print the JSON string representation of the object
print(GlobalPermission.to_json())

# convert the object into a dict
global_permission_dict = global_permission_instance.to_dict()
# create an instance of GlobalPermission from a dict
global_permission_from_dict = GlobalPermission.from_dict(global_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


