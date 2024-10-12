# ImageTemplateCustomizer

Describes a unit of image customization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Friendly Name to provide context on what this customization step does | [optional] 
**type** | **str** | The type of customization tool you want to use on the Image. For example, \&quot;Shell\&quot; can be shell customizer | 

## Example

```python
from openapi_client.models.image_template_customizer import ImageTemplateCustomizer

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateCustomizer from a JSON string
image_template_customizer_instance = ImageTemplateCustomizer.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateCustomizer.to_json())

# convert the object into a dict
image_template_customizer_dict = image_template_customizer_instance.to_dict()
# create an instance of ImageTemplateCustomizer from a dict
image_template_customizer_from_dict = ImageTemplateCustomizer.from_dict(image_template_customizer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


