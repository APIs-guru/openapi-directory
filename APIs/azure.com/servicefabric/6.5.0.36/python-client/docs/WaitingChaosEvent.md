# WaitingChaosEvent

Describes a Chaos event that gets generated when Chaos is waiting for the cluster to become ready for faulting, for example, Chaos may be waiting for the on-going upgrade to finish.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Describes why the WaitingChaosEvent was generated, for example, due to a cluster upgrade. | [optional] 

## Example

```python
from openapi_client.models.waiting_chaos_event import WaitingChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of WaitingChaosEvent from a JSON string
waiting_chaos_event_instance = WaitingChaosEvent.from_json(json)
# print the JSON string representation of the object
print(WaitingChaosEvent.to_json())

# convert the object into a dict
waiting_chaos_event_dict = waiting_chaos_event_instance.to_dict()
# create an instance of WaitingChaosEvent from a dict
waiting_chaos_event_from_dict = WaitingChaosEvent.from_dict(waiting_chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


