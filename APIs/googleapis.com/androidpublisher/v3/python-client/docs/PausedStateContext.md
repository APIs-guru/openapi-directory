# PausedStateContext

Information specific to a subscription in paused state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_resume_time** | **str** | Time at which the subscription will be automatically resumed. | [optional] 

## Example

```python
from openapi_client.models.paused_state_context import PausedStateContext

# TODO update the JSON string below
json = "{}"
# create an instance of PausedStateContext from a JSON string
paused_state_context_instance = PausedStateContext.from_json(json)
# print the JSON string representation of the object
print(PausedStateContext.to_json())

# convert the object into a dict
paused_state_context_dict = paused_state_context_instance.to_dict()
# create an instance of PausedStateContext from a dict
paused_state_context_from_dict = PausedStateContext.from_dict(paused_state_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


