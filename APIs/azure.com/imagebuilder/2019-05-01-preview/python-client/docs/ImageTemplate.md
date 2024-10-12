# ImageTemplate

Image template is an ARM resource managed by Microsoft.VirtualMachineImages provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ImageTemplateIdentity**](ImageTemplateIdentity.md) |  | [optional] 
**properties** | [**ImageTemplateProperties**](ImageTemplateProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_template import ImageTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplate from a JSON string
image_template_instance = ImageTemplate.from_json(json)
# print the JSON string representation of the object
print(ImageTemplate.to_json())

# convert the object into a dict
image_template_dict = image_template_instance.to_dict()
# create an instance of ImageTemplate from a dict
image_template_from_dict = ImageTemplate.from_dict(image_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


