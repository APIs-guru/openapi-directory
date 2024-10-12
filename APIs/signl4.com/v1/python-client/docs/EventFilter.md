# EventFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | [**PagedResultsPublicContinuationToken**](PagedResultsPublicContinuationToken.md) |  | [optional] 
**event_status_code** | [**EventStatusCodes**](EventStatusCodes.md) |  | [optional] 
**max_creation_date** | **datetime** |  | [optional] 
**min_creation_date** | **datetime** |  | [optional] 
**modified_since** | **datetime** |  | [optional] 
**team_id** | **str** |  | [optional] 
**text_to_search** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.event_filter import EventFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EventFilter from a JSON string
event_filter_instance = EventFilter.from_json(json)
# print the JSON string representation of the object
print(EventFilter.to_json())

# convert the object into a dict
event_filter_dict = event_filter_instance.to_dict()
# create an instance of EventFilter from a dict
event_filter_from_dict = EventFilter.from_dict(event_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


