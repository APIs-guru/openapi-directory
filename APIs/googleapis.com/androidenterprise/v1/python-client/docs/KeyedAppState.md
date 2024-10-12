# KeyedAppState

Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it. | [optional] 
**key** | **str** | Key indicating what the app is providing a state for. The content of the key is set by the app&#39;s developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present. | [optional] 
**message** | **str** | Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it. | [optional] 
**severity** | **str** | Severity of the app state. This field will always be present. | [optional] 
**state_timestamp_millis** | **str** | Timestamp of when the app set the state in milliseconds since epoch. This field will always be present. | [optional] 

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


