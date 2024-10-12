# ImageTemplatePlatformImageSource

Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). | [optional] 
**publisher** | **str** | Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). | [optional] 
**sku** | **str** | Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). | [optional] 
**version** | **str** | Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). | [optional] 

## Example

```python
from openapi_client.models.image_template_platform_image_source import ImageTemplatePlatformImageSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplatePlatformImageSource from a JSON string
image_template_platform_image_source_instance = ImageTemplatePlatformImageSource.from_json(json)
# print the JSON string representation of the object
print(ImageTemplatePlatformImageSource.to_json())

# convert the object into a dict
image_template_platform_image_source_dict = image_template_platform_image_source_instance.to_dict()
# create an instance of ImageTemplatePlatformImageSource from a dict
image_template_platform_image_source_from_dict = ImageTemplatePlatformImageSource.from_dict(image_template_platform_image_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


