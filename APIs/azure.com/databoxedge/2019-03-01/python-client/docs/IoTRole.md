# IoTRole

Compute role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**properties** | [**IoTRoleProperties**](IoTRoleProperties.md) |  | [optional] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 
**kind** | **str** | Role type. | 

## Example

```python
from openapi_client.models.io_t_role import IoTRole

# TODO update the JSON string below
json = "{}"
# create an instance of IoTRole from a JSON string
io_t_role_instance = IoTRole.from_json(json)
# print the JSON string representation of the object
print(IoTRole.to_json())

# convert the object into a dict
io_t_role_dict = io_t_role_instance.to_dict()
# create an instance of IoTRole from a dict
io_t_role_from_dict = IoTRole.from_dict(io_t_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


