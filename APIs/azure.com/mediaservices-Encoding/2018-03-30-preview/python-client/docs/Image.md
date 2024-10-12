# Image

Describes the basic properties for generating thumbnails from the input video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | **str** | The position in the input video at which to stop generating thumbnails. The value can be in absolute timestamp (ISO 8601, e.g: PT5M30S to stop at 5 minutes and 30 seconds), or a frame count (For example, 300 to stop at the 300th frame), or a relative value (For example, 100%). | [optional] 
**start** | **str** | The position in the input video from where to start generating thumbnails. The value can be in absolute timestamp (ISO 8601, e.g: PT05S), or a frame count (For example, 10 for the 10th frame), or a relative value (For example, 1%). Also supports a macro {Best}, which tells the encoder to select the best thumbnail from the first few seconds of the video. | [optional] 
**step** | **str** | The intervals at which thumbnails are generated. The value can be in absolute timestamp (ISO 8601, e.g: PT05S for one image every 5 seconds), or a frame count (For example, 30 for every 30 frames), or a relative value (For example, 1%). | [optional] 

## Example

```python
from openapi_client.models.image import Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image from a JSON string
image_instance = Image.from_json(json)
# print the JSON string representation of the object
print(Image.to_json())

# convert the object into a dict
image_dict = image_instance.to_dict()
# create an instance of Image from a dict
image_from_dict = Image.from_dict(image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


