# GlobalState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shared_state** | **object** |  | [optional] 
**stream_states** | [**List[StreamState]**](StreamState.md) |  | 

## Example

```python
from openapi_client.models.global_state import GlobalState

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalState from a JSON string
global_state_instance = GlobalState.from_json(json)
# print the JSON string representation of the object
print(GlobalState.to_json())

# convert the object into a dict
global_state_dict = global_state_instance.to_dict()
# create an instance of GlobalState from a dict
global_state_from_dict = GlobalState.from_dict(global_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


