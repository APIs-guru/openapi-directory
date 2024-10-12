# SwitchRuntimeRequest

Request for switching a Managed Notebook Runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_config** | [**RuntimeAcceleratorConfig**](RuntimeAcceleratorConfig.md) |  | [optional] 
**machine_type** | **str** | machine type. | [optional] 
**request_id** | **str** | Idempotent request UUID. | [optional] 

## Example

```python
from openapi_client.models.switch_runtime_request import SwitchRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchRuntimeRequest from a JSON string
switch_runtime_request_instance = SwitchRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(SwitchRuntimeRequest.to_json())

# convert the object into a dict
switch_runtime_request_dict = switch_runtime_request_instance.to_dict()
# create an instance of SwitchRuntimeRequest from a dict
switch_runtime_request_from_dict = SwitchRuntimeRequest.from_dict(switch_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


