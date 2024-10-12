# ConnectionState

Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | 
**global_state** | [**GlobalState**](GlobalState.md) |  | [optional] 
**state** | **object** |  | [optional] 
**state_type** | [**ConnectionStateType**](ConnectionStateType.md) |  | 
**stream_state** | [**List[StreamState]**](StreamState.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_state import ConnectionState

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionState from a JSON string
connection_state_instance = ConnectionState.from_json(json)
# print the JSON string representation of the object
print(ConnectionState.to_json())

# convert the object into a dict
connection_state_dict = connection_state_instance.to_dict()
# create an instance of ConnectionState from a dict
connection_state_from_dict = ConnectionState.from_dict(connection_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


