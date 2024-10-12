# ImageMetadata

Image metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Image format | [optional] 
**height** | **int** | Image height | [optional] 
**width** | **int** | Image width | [optional] 

## Example

```python
from openapi_client.models.image_metadata import ImageMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ImageMetadata from a JSON string
image_metadata_instance = ImageMetadata.from_json(json)
# print the JSON string representation of the object
print(ImageMetadata.to_json())

# convert the object into a dict
image_metadata_dict = image_metadata_instance.to_dict()
# create an instance of ImageMetadata from a dict
image_metadata_from_dict = ImageMetadata.from_dict(image_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


