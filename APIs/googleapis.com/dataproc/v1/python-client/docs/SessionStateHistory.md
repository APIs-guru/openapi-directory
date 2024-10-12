# SessionStateHistory

Historical state information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Output only. The state of the session at this point in the session history. | [optional] [readonly] 
**state_message** | **str** | Output only. Details about the state at this point in the session history. | [optional] [readonly] 
**state_start_time** | **str** | Output only. The time when the session entered the historical state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.session_state_history import SessionStateHistory

# TODO update the JSON string below
json = "{}"
# create an instance of SessionStateHistory from a JSON string
session_state_history_instance = SessionStateHistory.from_json(json)
# print the JSON string representation of the object
print(SessionStateHistory.to_json())

# convert the object into a dict
session_state_history_dict = session_state_history_instance.to_dict()
# create an instance of SessionStateHistory from a dict
session_state_history_from_dict = SessionStateHistory.from_dict(session_state_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


