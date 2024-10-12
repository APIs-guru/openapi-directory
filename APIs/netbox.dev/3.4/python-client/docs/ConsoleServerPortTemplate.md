# ConsoleServerPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**module_type** | [**NestedModuleType**](NestedModuleType.md) |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**type** | [**Type**](Type.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.console_server_port_template import ConsoleServerPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ConsoleServerPortTemplate from a JSON string
console_server_port_template_instance = ConsoleServerPortTemplate.from_json(json)
# print the JSON string representation of the object
print(ConsoleServerPortTemplate.to_json())

# convert the object into a dict
console_server_port_template_dict = console_server_port_template_instance.to_dict()
# create an instance of ConsoleServerPortTemplate from a dict
console_server_port_template_from_dict = ConsoleServerPortTemplate.from_dict(console_server_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


