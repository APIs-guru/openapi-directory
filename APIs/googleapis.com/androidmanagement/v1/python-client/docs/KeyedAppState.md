# KeyedAppState

Keyed app state reported by the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time of the app state on the device. | [optional] 
**data** | **str** | Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data &lt; 10”). | [optional] 
**key** | **str** | The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key. | [optional] 
**last_update_time** | **str** | The time the app state was most recently updated. | [optional] 
**message** | **str** | Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message. | [optional] 
**severity** | **str** | The severity of the app state. | [optional] 

## Example

```python
from openapi_client.models.keyed_app_state import KeyedAppState

# TODO update the JSON string below
json = "{}"
# create an instance of KeyedAppState from a JSON string
keyed_app_state_instance = KeyedAppState.from_json(json)
# print the JSON string representation of the object
print(KeyedAppState.to_json())

# convert the object into a dict
keyed_app_state_dict = keyed_app_state_instance.to_dict()
# create an instance of KeyedAppState from a dict
keyed_app_state_from_dict = KeyedAppState.from_dict(keyed_app_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


