# EventsSearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[EventOccurenceDetail]**](EventOccurenceDetail.md) |  | [optional] 
**query** | [**EventsQuery**](EventsQuery.md) |  | [optional] 
**stats** | [**SearchStatsMetaResult**](SearchStatsMetaResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_search_response import EventsSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventsSearchResponse from a JSON string
events_search_response_instance = EventsSearchResponse.from_json(json)
# print the JSON string representation of the object
print(EventsSearchResponse.to_json())

# convert the object into a dict
events_search_response_dict = events_search_response_instance.to_dict()
# create an instance of EventsSearchResponse from a dict
events_search_response_from_dict = EventsSearchResponse.from_dict(events_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


