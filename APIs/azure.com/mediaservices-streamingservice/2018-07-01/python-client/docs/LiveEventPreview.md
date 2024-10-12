# LiveEventPreview

The Live Event preview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control** | [**LiveEventPreviewAccessControl**](LiveEventPreviewAccessControl.md) |  | [optional] 
**alternative_media_id** | **str** | An Alternative Media Identifier associated with the StreamingLocator created for the preview.  This value is specified at creation time and cannot be updated.  The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field. | [optional] 
**endpoints** | [**List[LiveEventEndpoint]**](LiveEventEndpoint.md) | The endpoints for preview. | [optional] 
**preview_locator** | **str** | The identifier of the preview locator in Guid format.  Specifying this at creation time allows the caller to know the preview locator url before the event is created.  If omitted, the service will generate a random identifier.  This value cannot be updated once the live event is created. | [optional] 
**streaming_policy_name** | **str** | The name of streaming policy used for the LiveEvent preview.  This value is specified at creation time and cannot be updated. | [optional] 

## Example

```python
from openapi_client.models.live_event_preview import LiveEventPreview

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventPreview from a JSON string
live_event_preview_instance = LiveEventPreview.from_json(json)
# print the JSON string representation of the object
print(LiveEventPreview.to_json())

# convert the object into a dict
live_event_preview_dict = live_event_preview_instance.to_dict()
# create an instance of LiveEventPreview from a dict
live_event_preview_from_dict = LiveEventPreview.from_dict(live_event_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


