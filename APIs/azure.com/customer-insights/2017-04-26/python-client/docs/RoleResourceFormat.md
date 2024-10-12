# RoleResourceFormat

The role resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Role**](Role.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.role_resource_format import RoleResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RoleResourceFormat from a JSON string
role_resource_format_instance = RoleResourceFormat.from_json(json)
# print the JSON string representation of the object
print(RoleResourceFormat.to_json())

# convert the object into a dict
role_resource_format_dict = role_resource_format_instance.to_dict()
# create an instance of RoleResourceFormat from a dict
role_resource_format_from_dict = RoleResourceFormat.from_dict(role_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


