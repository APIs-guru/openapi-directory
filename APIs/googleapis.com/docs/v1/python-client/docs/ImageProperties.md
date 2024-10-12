# ImageProperties

The properties of an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | The clockwise rotation angle of the image, in radians. | [optional] 
**brightness** | **float** | The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. | [optional] 
**content_uri** | **str** | A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document&#39;s sharing settings change. | [optional] 
**contrast** | **float** | The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. | [optional] 
**crop_properties** | [**CropProperties**](CropProperties.md) |  | [optional] 
**source_uri** | **str** | The source URI is the URI used to insert the image. The source URI can be empty. | [optional] 
**transparency** | **float** | The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent. | [optional] 

## Example

```python
from openapi_client.models.image_properties import ImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImageProperties from a JSON string
image_properties_instance = ImageProperties.from_json(json)
# print the JSON string representation of the object
print(ImageProperties.to_json())

# convert the object into a dict
image_properties_dict = image_properties_instance.to_dict()
# create an instance of ImageProperties from a dict
image_properties_from_dict = ImageProperties.from_dict(image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


