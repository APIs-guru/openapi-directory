# ImageDescription

A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**ImageDescriptionDetails**](ImageDescriptionDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_description import ImageDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDescription from a JSON string
image_description_instance = ImageDescription.from_json(json)
# print the JSON string representation of the object
print(ImageDescription.to_json())

# convert the object into a dict
image_description_dict = image_description_instance.to_dict()
# create an instance of ImageDescription from a dict
image_description_from_dict = ImageDescription.from_dict(image_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


