# ChaosEventsSegment

Contains the list of Chaos events and the continuation token to get the next segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token is not included in the response. | [optional] 
**history** | [**List[ChaosEventWrapper]**](ChaosEventWrapper.md) | An list of Chaos events that were generated during the time range passed into the GetChaosReport API call. | [optional] 

## Example

```python
from openapi_client.models.chaos_events_segment import ChaosEventsSegment

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosEventsSegment from a JSON string
chaos_events_segment_instance = ChaosEventsSegment.from_json(json)
# print the JSON string representation of the object
print(ChaosEventsSegment.to_json())

# convert the object into a dict
chaos_events_segment_dict = chaos_events_segment_instance.to_dict()
# create an instance of ChaosEventsSegment from a dict
chaos_events_segment_from_dict = ChaosEventsSegment.from_dict(chaos_events_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


