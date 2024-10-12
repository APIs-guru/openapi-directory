# DynamicListener

Describes a dynamically loaded listener via the LDS API. [#next-free-field: 7]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_state** | [**DynamicListenerState**](DynamicListenerState.md) |  | [optional] 
**client_status** | **str** | The client status of this resource. [#not-implemented-hide:] | [optional] 
**draining_state** | [**DynamicListenerState**](DynamicListenerState.md) |  | [optional] 
**error_state** | [**UpdateFailureState**](UpdateFailureState.md) |  | [optional] 
**name** | **str** | The name or unique id of this listener, pulled from the DynamicListenerState config. | [optional] 
**warming_state** | [**DynamicListenerState**](DynamicListenerState.md) |  | [optional] 

## Example

```python
from openapi_client.models.dynamic_listener import DynamicListener

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicListener from a JSON string
dynamic_listener_instance = DynamicListener.from_json(json)
# print the JSON string representation of the object
print(DynamicListener.to_json())

# convert the object into a dict
dynamic_listener_dict = dynamic_listener_instance.to_dict()
# create an instance of DynamicListener from a dict
dynamic_listener_from_dict = DynamicListener.from_dict(dynamic_listener_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


