# BatchUsageLogEvents

Batched event logs of events from the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **str** | The name of the device in the form ‘enterprises/{enterpriseId}/devices/{deviceId}’ | [optional] 
**retrieval_time** | **str** | The device timestamp when the batch of events were collected from the device. | [optional] 
**usage_log_events** | [**List[UsageLogEvent]**](UsageLogEvent.md) | The list of UsageLogEvent that were reported by the device, sorted chronologically by the event time. | [optional] 
**user** | **str** | The resource name of the user that owns this device in the form ‘enterprises/{enterpriseId}/users/{userId}’. | [optional] 

## Example

```python
from openapi_client.models.batch_usage_log_events import BatchUsageLogEvents

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUsageLogEvents from a JSON string
batch_usage_log_events_instance = BatchUsageLogEvents.from_json(json)
# print the JSON string representation of the object
print(BatchUsageLogEvents.to_json())

# convert the object into a dict
batch_usage_log_events_dict = batch_usage_log_events_instance.to_dict()
# create an instance of BatchUsageLogEvents from a dict
batch_usage_log_events_from_dict = BatchUsageLogEvents.from_dict(batch_usage_log_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


