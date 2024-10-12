# ImageReference

Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | Specifies the offer of the platform image or marketplace image used to create the virtual machine. | [optional] 
**publisher** | **str** | The image publisher. | [optional] 
**sku** | **str** | The image SKU. | [optional] 
**version** | **str** | Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or &#39;latest&#39;. Major, Minor, and Build are decimal numbers. Specify &#39;latest&#39; to use the latest version of an image available at deploy time. Even if you use &#39;latest&#39;, the VM image will not automatically update after deploy time even if a new version becomes available. | [optional] 
**id** | **str** | Resource Id | [optional] 

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


