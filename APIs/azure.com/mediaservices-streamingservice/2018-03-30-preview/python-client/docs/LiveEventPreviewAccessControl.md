# LiveEventPreviewAccessControl

The IP access control for Live Event preview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | [**IPAccessControl**](IPAccessControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_event_preview_access_control import LiveEventPreviewAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventPreviewAccessControl from a JSON string
live_event_preview_access_control_instance = LiveEventPreviewAccessControl.from_json(json)
# print the JSON string representation of the object
print(LiveEventPreviewAccessControl.to_json())

# convert the object into a dict
live_event_preview_access_control_dict = live_event_preview_access_control_instance.to_dict()
# create an instance of LiveEventPreviewAccessControl from a dict
live_event_preview_access_control_from_dict = LiveEventPreviewAccessControl.from_dict(live_event_preview_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


