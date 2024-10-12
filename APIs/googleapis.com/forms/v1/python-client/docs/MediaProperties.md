# MediaProperties

Properties of the media.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **str** | Position of the media. | [optional] 
**width** | **int** | The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source. | [optional] 

## Example

```python
from openapi_client.models.media_properties import MediaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MediaProperties from a JSON string
media_properties_instance = MediaProperties.from_json(json)
# print the JSON string representation of the object
print(MediaProperties.to_json())

# convert the object into a dict
media_properties_dict = media_properties_instance.to_dict()
# create an instance of MediaProperties from a dict
media_properties_from_dict = MediaProperties.from_dict(media_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


