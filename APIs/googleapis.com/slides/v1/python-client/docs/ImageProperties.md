# ImageProperties

The properties of the Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brightness** | **float** | The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only. | [optional] 
**contrast** | **float** | The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only. | [optional] 
**crop_properties** | [**CropProperties**](CropProperties.md) |  | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**outline** | [**Outline**](Outline.md) |  | [optional] 
**recolor** | [**Recolor**](Recolor.md) |  | [optional] 
**shadow** | [**Shadow**](Shadow.md) |  | [optional] 
**transparency** | **float** | The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only. | [optional] 

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


