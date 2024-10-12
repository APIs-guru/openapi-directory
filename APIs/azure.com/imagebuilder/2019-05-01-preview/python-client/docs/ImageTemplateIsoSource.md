# ImageTemplateIsoSource

Describes an image source that is an installation ISO. Currently only supports Red Hat Enterprise Linux 7.2-7.5 ISO's.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256_checksum** | **str** | SHA256 Checksum of the ISO image. | 
**source_uri** | **str** | URI to get the ISO image. This URI has to be accessible to the resource provider at the time of the image template creation. | 

## Example

```python
from openapi_client.models.image_template_iso_source import ImageTemplateIsoSource

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateIsoSource from a JSON string
image_template_iso_source_instance = ImageTemplateIsoSource.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateIsoSource.to_json())

# convert the object into a dict
image_template_iso_source_dict = image_template_iso_source_instance.to_dict()
# create an instance of ImageTemplateIsoSource from a dict
image_template_iso_source_from_dict = ImageTemplateIsoSource.from_dict(image_template_iso_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


