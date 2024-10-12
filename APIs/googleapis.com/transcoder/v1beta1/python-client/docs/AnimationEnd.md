# AnimationEnd

End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time_offset** | **str** | The time to end overlay object, in seconds. Default: 0 | [optional] 

## Example

```python
from openapi_client.models.animation_end import AnimationEnd

# TODO update the JSON string below
json = "{}"
# create an instance of AnimationEnd from a JSON string
animation_end_instance = AnimationEnd.from_json(json)
# print the JSON string representation of the object
print(AnimationEnd.to_json())

# convert the object into a dict
animation_end_dict = animation_end_instance.to_dict()
# create an instance of AnimationEnd from a dict
animation_end_from_dict = AnimationEnd.from_dict(animation_end_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


