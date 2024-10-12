# EventHubConsumerGroupsListResult

The JSON-serialized array of Event Hub-compatible consumer group names with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | **List[str]** | The array of Event Hub-compatible consumer group names. | [optional] 

## Example

```python
from openapi_client.models.event_hub_consumer_groups_list_result import EventHubConsumerGroupsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConsumerGroupsListResult from a JSON string
event_hub_consumer_groups_list_result_instance = EventHubConsumerGroupsListResult.from_json(json)
# print the JSON string representation of the object
print(EventHubConsumerGroupsListResult.to_json())

# convert the object into a dict
event_hub_consumer_groups_list_result_dict = event_hub_consumer_groups_list_result_instance.to_dict()
# create an instance of EventHubConsumerGroupsListResult from a dict
event_hub_consumer_groups_list_result_from_dict = EventHubConsumerGroupsListResult.from_dict(event_hub_consumer_groups_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


