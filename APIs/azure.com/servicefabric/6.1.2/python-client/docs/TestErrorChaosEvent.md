# TestErrorChaosEvent

Describes a Chaos event that gets generated when an unexpected event occurs in the Chaos engine. For example, due to the cluster snapshot being inconsistent, while faulting an entity, Chaos found that the entity was already faulted -- which would be an unexpected event. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Describes why TestErrorChaosEvent was generated. For example, Chaos tries to fault a partition but finds that the partition is no longer fault tolerant, then a TestErrorEvent gets generated with the reason stating that the partition is not fault tolerant. | [optional] 

## Example

```python
from openapi_client.models.test_error_chaos_event import TestErrorChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TestErrorChaosEvent from a JSON string
test_error_chaos_event_instance = TestErrorChaosEvent.from_json(json)
# print the JSON string representation of the object
print(TestErrorChaosEvent.to_json())

# convert the object into a dict
test_error_chaos_event_dict = test_error_chaos_event_instance.to_dict()
# create an instance of TestErrorChaosEvent from a dict
test_error_chaos_event_from_dict = TestErrorChaosEvent.from_dict(test_error_chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


