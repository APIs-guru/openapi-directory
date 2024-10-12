# TrackingEventErrorInfo

The tracking event error info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code. | [optional] 
**message** | **str** | The message. | [optional] 

## Example

```python
from openapi_client.models.tracking_event_error_info import TrackingEventErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingEventErrorInfo from a JSON string
tracking_event_error_info_instance = TrackingEventErrorInfo.from_json(json)
# print the JSON string representation of the object
print(TrackingEventErrorInfo.to_json())

# convert the object into a dict
tracking_event_error_info_dict = tracking_event_error_info_instance.to_dict()
# create an instance of TrackingEventErrorInfo from a dict
tracking_event_error_info_from_dict = TrackingEventErrorInfo.from_dict(tracking_event_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


