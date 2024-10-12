# DynamicListenerState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** | The timestamp when the Listener was last successfully updated. | [optional] 
**listener** | **Dict[str, object]** | The listener config. | [optional] 
**version_info** | **str** | This is the per-resource version information. This version is currently taken from the :ref:&#x60;version_info &#x60; field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API. | [optional] 

## Example

```python
from openapi_client.models.dynamic_listener_state import DynamicListenerState

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicListenerState from a JSON string
dynamic_listener_state_instance = DynamicListenerState.from_json(json)
# print the JSON string representation of the object
print(DynamicListenerState.to_json())

# convert the object into a dict
dynamic_listener_state_dict = dynamic_listener_state_instance.to_dict()
# create an instance of DynamicListenerState from a dict
dynamic_listener_state_from_dict = DynamicListenerState.from_dict(dynamic_listener_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


