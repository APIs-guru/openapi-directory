# StoppedChaosEvent

Describes a Chaos event that gets generated when Chaos stops because either the user issued a stop or the time to run was up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Describes why Chaos stopped. Chaos can stop because of StopChaos API call or the timeToRun provided in ChaosParameters is over. | [optional] 

## Example

```python
from openapi_client.models.stopped_chaos_event import StoppedChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StoppedChaosEvent from a JSON string
stopped_chaos_event_instance = StoppedChaosEvent.from_json(json)
# print the JSON string representation of the object
print(StoppedChaosEvent.to_json())

# convert the object into a dict
stopped_chaos_event_dict = stopped_chaos_event_instance.to_dict()
# create an instance of StoppedChaosEvent from a dict
stopped_chaos_event_from_dict = StoppedChaosEvent.from_dict(stopped_chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


