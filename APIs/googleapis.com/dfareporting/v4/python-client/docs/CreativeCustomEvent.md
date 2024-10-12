# CreativeCustomEvent

Creative Custom Event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_custom_event_id** | **str** | Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. | [optional] 
**advertiser_custom_event_name** | **str** | User-entered name for the event. | [optional] 
**advertiser_custom_event_type** | **str** | Type of the event. This is a read-only field. | [optional] 
**artwork_label** | **str** | Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. | [optional] 
**artwork_type** | **str** | Artwork type used by the creative.This is a read-only field. | [optional] 
**exit_click_through_url** | [**CreativeClickThroughUrl**](CreativeClickThroughUrl.md) |  | [optional] 
**id** | **str** | ID of this event. This is a required field and should not be modified after insertion. | [optional] 
**popup_window_properties** | [**PopupWindowProperties**](PopupWindowProperties.md) |  | [optional] 
**target_type** | **str** | Target type used by the event. | [optional] 
**video_reporting_id** | **str** | Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. | [optional] 

## Example

```python
from openapi_client.models.creative_custom_event import CreativeCustomEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeCustomEvent from a JSON string
creative_custom_event_instance = CreativeCustomEvent.from_json(json)
# print the JSON string representation of the object
print(CreativeCustomEvent.to_json())

# convert the object into a dict
creative_custom_event_dict = creative_custom_event_instance.to_dict()
# create an instance of CreativeCustomEvent from a dict
creative_custom_event_from_dict = CreativeCustomEvent.from_dict(creative_custom_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


