# InvideoTiming

Describes a temporal position of a visual widget inside a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_ms** | **str** | Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default. | [optional] 
**offset_ms** | **str** | Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds. | [optional] 
**type** | **str** | Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video. | [optional] 

## Example

```python
from openapi_client.models.invideo_timing import InvideoTiming

# TODO update the JSON string below
json = "{}"
# create an instance of InvideoTiming from a JSON string
invideo_timing_instance = InvideoTiming.from_json(json)
# print the JSON string representation of the object
print(InvideoTiming.to_json())

# convert the object into a dict
invideo_timing_dict = invideo_timing_instance.to_dict()
# create an instance of InvideoTiming from a dict
invideo_timing_from_dict = InvideoTiming.from_dict(invideo_timing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


