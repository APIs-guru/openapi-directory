# ImageTemplateManagedImageSource

Describes an image source that is a managed image in customer subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **str** | ARM resource id of the managed image in customer subscription | 

## Example

```python
from openapi_client.models.image_template_managed_image_source import ImageTemplateManagedImageSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateManagedImageSource from a JSON string
image_template_managed_image_source_instance = ImageTemplateManagedImageSource.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateManagedImageSource.to_json())

# convert the object into a dict
image_template_managed_image_source_dict = image_template_managed_image_source_instance.to_dict()
# create an instance of ImageTemplateManagedImageSource from a dict
image_template_managed_image_source_from_dict = ImageTemplateManagedImageSource.from_dict(image_template_managed_image_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


