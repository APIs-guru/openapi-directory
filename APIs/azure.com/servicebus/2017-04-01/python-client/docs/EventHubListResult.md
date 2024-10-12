# EventHubListResult

The result of the List EventHubs operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of EventHubs. | [optional] [readonly] 
**value** | [**List[Eventhub]**](Eventhub.md) | Result of the List EventHubs operation. | [optional] 

## Example

```python
from openapi_client.models.event_hub_list_result import EventHubListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubListResult from a JSON string
event_hub_list_result_instance = EventHubListResult.from_json(json)
# print the JSON string representation of the object
print(EventHubListResult.to_json())

# convert the object into a dict
event_hub_list_result_dict = event_hub_list_result_instance.to_dict()
# create an instance of EventHubListResult from a dict
event_hub_list_result_from_dict = EventHubListResult.from_dict(event_hub_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


