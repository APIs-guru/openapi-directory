# ImageTemplateSharedImageVersionSource

Describes an image source that is an image version in a shared image gallery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_version_id** | **str** | ARM resource id of the image version in the shared image gallery | 

## Example

```python
from openapi_client.models.image_template_shared_image_version_source import ImageTemplateSharedImageVersionSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateSharedImageVersionSource from a JSON string
image_template_shared_image_version_source_instance = ImageTemplateSharedImageVersionSource.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateSharedImageVersionSource.to_json())

# convert the object into a dict
image_template_shared_image_version_source_dict = image_template_shared_image_version_source_instance.to_dict()
# create an instance of ImageTemplateSharedImageVersionSource from a dict
image_template_shared_image_version_source_from_dict = ImageTemplateSharedImageVersionSource.from_dict(image_template_shared_image_version_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


