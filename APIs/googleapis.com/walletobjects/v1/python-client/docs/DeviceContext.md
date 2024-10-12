# DeviceContext

Device context associated with the object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_token** | **str** | If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user&#39;s device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated. | [optional] 

## Example

```python
from openapi_client.models.device_context import DeviceContext

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceContext from a JSON string
device_context_instance = DeviceContext.from_json(json)
# print the JSON string representation of the object
print(DeviceContext.to_json())

# convert the object into a dict
device_context_dict = device_context_instance.to_dict()
# create an instance of DeviceContext from a dict
device_context_from_dict = DeviceContext.from_dict(device_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


