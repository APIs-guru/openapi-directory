# EventsAvailabilityResultInfo

The availability result info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | The duration of the availability result | [optional] 
**id** | **str** | The ID of the availability result | [optional] 
**location** | **str** | The location of the availability result | [optional] 
**message** | **str** | The message of the availability result | [optional] 
**name** | **str** | The name of the availability result | [optional] 
**performance_bucket** | **str** | The performance bucket of the availability result | [optional] 
**size** | **str** | The size of the availability result | [optional] 
**success** | **str** | Indicates if the availability result was successful | [optional] 

## Example

```python
from openapi_client.models.events_availability_result_info import EventsAvailabilityResultInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsAvailabilityResultInfo from a JSON string
events_availability_result_info_instance = EventsAvailabilityResultInfo.from_json(json)
# print the JSON string representation of the object
print(EventsAvailabilityResultInfo.to_json())

# convert the object into a dict
events_availability_result_info_dict = events_availability_result_info_instance.to_dict()
# create an instance of EventsAvailabilityResultInfo from a dict
events_availability_result_info_from_dict = EventsAvailabilityResultInfo.from_dict(events_availability_result_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


