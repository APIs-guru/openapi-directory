# TrackingEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TrackingEventErrorInfo**](TrackingEventErrorInfo.md) |  | [optional] 
**event_level** | [**EventLevel**](EventLevel.md) |  | 
**event_time** | **datetime** |  | 
**record_type** | [**TrackingRecordType**](TrackingRecordType.md) |  | 

## Example

```python
from openapi_client.models.tracking_event import TrackingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingEvent from a JSON string
tracking_event_instance = TrackingEvent.from_json(json)
# print the JSON string representation of the object
print(TrackingEvent.to_json())

# convert the object into a dict
tracking_event_dict = tracking_event_instance.to_dict()
# create an instance of TrackingEvent from a dict
tracking_event_from_dict = TrackingEvent.from_dict(tracking_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


