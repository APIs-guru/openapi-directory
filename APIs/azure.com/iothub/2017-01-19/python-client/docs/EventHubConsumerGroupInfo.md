# EventHubConsumerGroupInfo

The properties of the EventHubConsumerGroupInfo object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Event Hub-compatible consumer group identifier. | [optional] 
**name** | **str** | The Event Hub-compatible consumer group name. | [optional] 
**tags** | **Dict[str, str]** | The tags. | [optional] 

## Example

```python
from openapi_client.models.event_hub_consumer_group_info import EventHubConsumerGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConsumerGroupInfo from a JSON string
event_hub_consumer_group_info_instance = EventHubConsumerGroupInfo.from_json(json)
# print the JSON string representation of the object
print(EventHubConsumerGroupInfo.to_json())

# convert the object into a dict
event_hub_consumer_group_info_dict = event_hub_consumer_group_info_instance.to_dict()
# create an instance of EventHubConsumerGroupInfo from a dict
event_hub_consumer_group_info_from_dict = EventHubConsumerGroupInfo.from_dict(event_hub_consumer_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


