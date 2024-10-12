# ListenersConfigDump

Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_listeners** | [**List[DynamicListener]**](DynamicListener.md) | State for any warming, active, or draining listeners. | [optional] 
**static_listeners** | [**List[StaticListener]**](StaticListener.md) | The statically loaded listener configs. | [optional] 
**version_info** | **str** | This is the :ref:&#x60;version_info &#x60; in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be \&quot;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.listeners_config_dump import ListenersConfigDump

# TODO update the JSON string below
json = "{}"
# create an instance of ListenersConfigDump from a JSON string
listeners_config_dump_instance = ListenersConfigDump.from_json(json)
# print the JSON string representation of the object
print(ListenersConfigDump.to_json())

# convert the object into a dict
listeners_config_dump_dict = listeners_config_dump_instance.to_dict()
# create an instance of ListenersConfigDump from a dict
listeners_config_dump_from_dict = ListenersConfigDump.from_dict(listeners_config_dump_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


