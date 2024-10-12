# CounterEvent

Counter event of the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the counter event. | [optional] 
**reporting_name** | **str** | Required. The name used to identify this counter event in reports. | [optional] 

## Example

```python
from openapi_client.models.counter_event import CounterEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CounterEvent from a JSON string
counter_event_instance = CounterEvent.from_json(json)
# print the JSON string representation of the object
print(CounterEvent.to_json())

# convert the object into a dict
counter_event_dict = counter_event_instance.to_dict()
# create an instance of CounterEvent from a dict
counter_event_from_dict = CounterEvent.from_dict(counter_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


