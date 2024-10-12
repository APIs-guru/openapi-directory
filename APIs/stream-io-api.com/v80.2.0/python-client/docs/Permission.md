# Permission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action name this permission is for (e.g. SendMessage) | 
**condition** | **Dict[str, object]** | MongoDB style condition which decides whether or not the permission is granted | [optional] 
**custom** | **bool** | Whether this is a custom permission or built-in | 
**description** | **str** | Description of the permission | 
**id** | **str** | Unique permission ID | 
**level** | **str** | Level at which permission could be applied (app or channel) | 
**name** | **str** | Name of the permission | 
**owner** | **bool** | Whether this permission applies to resource owner or not | 
**same_team** | **bool** | Whether this permission applies to teammates (multi-tenancy mode only) | 
**tags** | **List[str]** | List of tags of the permission | 

## Example

```python
from openapi_client.models.permission import Permission

# TODO update the JSON string below
json = "{}"
# create an instance of Permission from a JSON string
permission_instance = Permission.from_json(json)
# print the JSON string representation of the object
print(Permission.to_json())

# convert the object into a dict
permission_dict = permission_instance.to_dict()
# create an instance of Permission from a dict
permission_from_dict = Permission.from_dict(permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


