# AnimationFade

Display overlay object with fade animation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_offset** | **str** | The time to end the fade animation, in seconds. Default: &#x60;start_time_offset&#x60; + 1s | [optional] 
**fade_type** | **str** | Required. Type of fade animation: &#x60;FADE_IN&#x60; or &#x60;FADE_OUT&#x60;. | [optional] 
**start_time_offset** | **str** | The time to start the fade animation, in seconds. Default: 0 | [optional] 
**xy** | [**NormalizedCoordinate**](NormalizedCoordinate.md) |  | [optional] 

## Example

```python
from openapi_client.models.animation_fade import AnimationFade

# TODO update the JSON string below
json = "{}"
# create an instance of AnimationFade from a JSON string
animation_fade_instance = AnimationFade.from_json(json)
# print the JSON string representation of the object
print(AnimationFade.to_json())

# convert the object into a dict
animation_fade_dict = animation_fade_instance.to_dict()
# create an instance of AnimationFade from a dict
animation_fade_from_dict = AnimationFade.from_dict(animation_fade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


