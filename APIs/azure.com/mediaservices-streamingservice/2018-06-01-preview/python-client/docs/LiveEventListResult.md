# LiveEventListResult

The LiveEvent list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_count** | **int** | The number of result. | [optional] 
**odata_next_link** | **str** | Th link to the next set of results. Not empty if value contains incomplete list of Live Outputs. | [optional] 
**value** | [**List[LiveEvent]**](LiveEvent.md) | The result of the List Live Event operation. | [optional] 

## Example

```python
from openapi_client.models.live_event_list_result import LiveEventListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventListResult from a JSON string
live_event_list_result_instance = LiveEventListResult.from_json(json)
# print the JSON string representation of the object
print(LiveEventListResult.to_json())

# convert the object into a dict
live_event_list_result_dict = live_event_list_result_instance.to_dict()
# create an instance of LiveEventListResult from a dict
live_event_list_result_from_dict = LiveEventListResult.from_dict(live_event_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


