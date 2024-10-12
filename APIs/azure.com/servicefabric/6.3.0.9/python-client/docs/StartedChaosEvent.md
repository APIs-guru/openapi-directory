# StartedChaosEvent

Describes a Chaos event that gets generated when Chaos is started.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_parameters** | [**ChaosParameters**](ChaosParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.started_chaos_event import StartedChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StartedChaosEvent from a JSON string
started_chaos_event_instance = StartedChaosEvent.from_json(json)
# print the JSON string representation of the object
print(StartedChaosEvent.to_json())

# convert the object into a dict
started_chaos_event_dict = started_chaos_event_instance.to_dict()
# create an instance of StartedChaosEvent from a dict
started_chaos_event_from_dict = StartedChaosEvent.from_dict(started_chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


