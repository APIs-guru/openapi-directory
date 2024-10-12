# Thumbnail

The thumbnail of a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_url** | **str** | The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation&#39;s sharing settings change. The mime type of the thumbnail image is the same as specified in the &#x60;GetPageThumbnailRequest&#x60;. | [optional] 
**height** | **int** | The positive height in pixels of the thumbnail image. | [optional] 
**width** | **int** | The positive width in pixels of the thumbnail image. | [optional] 

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


