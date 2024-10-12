# EventHubProperties

The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The Event Hub-compatible endpoint. | [optional] [readonly] 
**partition_count** | **int** | The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages. | [optional] 
**partition_ids** | **List[str]** | The partition ids in the Event Hub-compatible endpoint. | [optional] [readonly] 
**path** | **str** | The Event Hub-compatible name. | [optional] [readonly] 
**retention_time_in_days** | **int** | The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages | [optional] 

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


