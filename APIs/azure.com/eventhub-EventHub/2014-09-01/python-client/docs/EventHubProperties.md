# EventHubProperties

Properties supplied to the Create Or Update Event Hub operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Exact time the Event Hub was created. | [optional] [readonly] 
**message_retention_in_days** | **int** | Number of days to retain the events for this Event Hub. | [optional] 
**partition_count** | **int** | Number of partitions created for the Event Hub. | [optional] 
**partition_ids** | **List[str]** | Current number of shards on the Event Hub. | [optional] [readonly] 
**status** | **str** | Enumerates the possible values for the status of the Event Hub. | [optional] 
**updated_at** | **datetime** | The exact time the message was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_hub_properties import EventHubProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubProperties from a JSON string
event_hub_properties_instance = EventHubProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubProperties.to_json())

# convert the object into a dict
event_hub_properties_dict = event_hub_properties_instance.to_dict()
# create an instance of EventHubProperties from a dict
event_hub_properties_from_dict = EventHubProperties.from_dict(event_hub_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


