# WritableConsoleServerPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**module_type** | **int** |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_console_server_port_template import WritableConsoleServerPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableConsoleServerPortTemplate from a JSON string
writable_console_server_port_template_instance = WritableConsoleServerPortTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableConsoleServerPortTemplate.to_json())

# convert the object into a dict
writable_console_server_port_template_dict = writable_console_server_port_template_instance.to_dict()
# create an instance of WritableConsoleServerPortTemplate from a dict
writable_console_server_port_template_from_dict = WritableConsoleServerPortTemplate.from_dict(writable_console_server_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


