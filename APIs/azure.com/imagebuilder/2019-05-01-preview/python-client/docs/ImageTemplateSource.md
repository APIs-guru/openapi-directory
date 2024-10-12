# ImageTemplateSource

Describes a virtual machine image source for building, customizing and distributing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Specifies the type of source image you want to start with. | 

## Example

```python
from openapi_client.models.image_template_source import ImageTemplateSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateSource from a JSON string
image_template_source_instance = ImageTemplateSource.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateSource.to_json())

# convert the object into a dict
image_template_source_dict = image_template_source_instance.to_dict()
# create an instance of ImageTemplateSource from a dict
image_template_source_from_dict = ImageTemplateSource.from_dict(image_template_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


