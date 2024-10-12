# StaticListener

Describes a statically loaded listener.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** | The timestamp when the Listener was last successfully updated. | [optional] 
**listener** | **Dict[str, object]** | The listener config. | [optional] 

## Example

```python
from openapi_client.models.static_listener import StaticListener

# TODO update the JSON string below
json = "{}"
# create an instance of StaticListener from a JSON string
static_listener_instance = StaticListener.from_json(json)
# print the JSON string representation of the object
print(StaticListener.to_json())

# convert the object into a dict
static_listener_dict = static_listener_instance.to_dict()
# create an instance of StaticListener from a dict
static_listener_from_dict = StaticListener.from_dict(static_listener_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


