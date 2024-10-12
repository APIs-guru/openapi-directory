# Thumbnail

A single thumbnail, with its size and format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The thumbnail&#39;s content type, i.e. \&quot;image/png\&quot;. Always set. | [optional] 
**data** | **bytearray** | The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set. | [optional] 
**height_px** | **int** | The height of the thumbnail, in pixels. Always set. | [optional] 
**width_px** | **int** | The width of the thumbnail, in pixels. Always set. | [optional] 

## Example

```python
from openapi_client.models.thumbnail import Thumbnail

# TODO update the JSON string below
json = "{}"
# create an instance of Thumbnail from a JSON string
thumbnail_instance = Thumbnail.from_json(json)
# print the JSON string representation of the object
print(Thumbnail.to_json())

# convert the object into a dict
thumbnail_dict = thumbnail_instance.to_dict()
# create an instance of Thumbnail from a dict
thumbnail_from_dict = Thumbnail.from_dict(thumbnail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


