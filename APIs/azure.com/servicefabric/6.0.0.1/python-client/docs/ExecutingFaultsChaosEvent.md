# ExecutingFaultsChaosEvent

Describes a Chaos event that gets generated when Chaos has decided on the faults for an iteration. This Chaos event contains the details of the faults as a list of strings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**faults** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.executing_faults_chaos_event import ExecutingFaultsChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutingFaultsChaosEvent from a JSON string
executing_faults_chaos_event_instance = ExecutingFaultsChaosEvent.from_json(json)
# print the JSON string representation of the object
print(ExecutingFaultsChaosEvent.to_json())

# convert the object into a dict
executing_faults_chaos_event_dict = executing_faults_chaos_event_instance.to_dict()
# create an instance of ExecutingFaultsChaosEvent from a dict
executing_faults_chaos_event_from_dict = ExecutingFaultsChaosEvent.from_dict(executing_faults_chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


