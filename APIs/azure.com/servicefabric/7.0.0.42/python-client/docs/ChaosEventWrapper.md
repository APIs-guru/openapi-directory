# ChaosEventWrapper

Wrapper object for Chaos event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_event** | [**ChaosEvent**](ChaosEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.chaos_event_wrapper import ChaosEventWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosEventWrapper from a JSON string
chaos_event_wrapper_instance = ChaosEventWrapper.from_json(json)
# print the JSON string representation of the object
print(ChaosEventWrapper.to_json())

# convert the object into a dict
chaos_event_wrapper_dict = chaos_event_wrapper_instance.to_dict()
# create an instance of ChaosEventWrapper from a dict
chaos_event_wrapper_from_dict = ChaosEventWrapper.from_dict(chaos_event_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


