# EventsAvailabilityResultResult

An availability result result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_result** | [**EventsAvailabilityResultInfo**](EventsAvailabilityResultInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_availability_result_result import EventsAvailabilityResultResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsAvailabilityResultResult from a JSON string
events_availability_result_result_instance = EventsAvailabilityResultResult.from_json(json)
# print the JSON string representation of the object
print(EventsAvailabilityResultResult.to_json())

# convert the object into a dict
events_availability_result_result_dict = events_availability_result_result_instance.to_dict()
# create an instance of EventsAvailabilityResultResult from a dict
events_availability_result_result_from_dict = EventsAvailabilityResultResult.from_dict(events_availability_result_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


