# AnimatedGif


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preview_image_url** | **str** |  | [optional] 
**variants** | [**List[Variant]**](Variant.md) | An array of all available variants of the media. | [optional] 

## Example

```python
from openapi_client.models.animated_gif import AnimatedGif

# TODO update the JSON string below
json = "{}"
# create an instance of AnimatedGif from a JSON string
animated_gif_instance = AnimatedGif.from_json(json)
# print the JSON string representation of the object
print(AnimatedGif.to_json())

# convert the object into a dict
animated_gif_dict = animated_gif_instance.to_dict()
# create an instance of AnimatedGif from a dict
animated_gif_from_dict = AnimatedGif.from_dict(animated_gif_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


