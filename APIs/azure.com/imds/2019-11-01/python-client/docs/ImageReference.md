# ImageReference

This contains information about the OS image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | This is the resource ID. | [optional] 
**offer** | **str** | This is the offer of the platform or marketplace image. | [optional] 
**publisher** | **str** | This is the image publisher. | [optional] 
**sku** | **str** | This is the image SKU. | [optional] 
**version** | **str** | This is the version of the platform or marketplace image. | [optional] 

## Example

```python
from openapi_client.models.image_reference import ImageReference

# TODO update the JSON string below
json = "{}"
# create an instance of ImageReference from a JSON string
image_reference_instance = ImageReference.from_json(json)
# print the JSON string representation of the object
print(ImageReference.to_json())

# convert the object into a dict
image_reference_dict = image_reference_instance.to_dict()
# create an instance of ImageReference from a dict
image_reference_from_dict = ImageReference.from_dict(image_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


