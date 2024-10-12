# Capabilities

The regional capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**CapabilitiesCapabilities**](CapabilitiesCapabilities.md) |  | [optional] 
**gpu** | **str** | The GPU sku that this capability describes. | [optional] [readonly] 
**ip_address_type** | **str** | The ip address type that this capability describes. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] [readonly] 
**os_type** | **str** | The OS type that this capability describes. | [optional] [readonly] 
**resource_type** | **str** | The resource type that this capability describes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.capabilities import Capabilities

# TODO update the JSON string below
json = "{}"
# create an instance of Capabilities from a JSON string
capabilities_instance = Capabilities.from_json(json)
# print the JSON string representation of the object
print(Capabilities.to_json())

# convert the object into a dict
capabilities_dict = capabilities_instance.to_dict()
# create an instance of Capabilities from a dict
capabilities_from_dict = Capabilities.from_dict(capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


