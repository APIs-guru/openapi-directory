# AbsoluteClipTime

Specifies the clip time as an absolute time position in the media file.  The absolute time can point to a different position depending on whether the media file starts from a timestamp of zero or not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | The time position on the timeline of the input media. It is usually specified as an ISO8601 period. e.g PT30S for 30 seconds. | 

## Example

```python
from openapi_client.models.absolute_clip_time import AbsoluteClipTime

# TODO update the JSON string below
json = "{}"
# create an instance of AbsoluteClipTime from a JSON string
absolute_clip_time_instance = AbsoluteClipTime.from_json(json)
# print the JSON string representation of the object
print(AbsoluteClipTime.to_json())

# convert the object into a dict
absolute_clip_time_dict = absolute_clip_time_instance.to_dict()
# create an instance of AbsoluteClipTime from a dict
absolute_clip_time_from_dict = AbsoluteClipTime.from_dict(absolute_clip_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


