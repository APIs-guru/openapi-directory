# ImageTemplateUpdateParameters

Parameters for updating an image template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ImageTemplateIdentity**](ImageTemplateIdentity.md) |  | [optional] 
**tags** | **Dict[str, str]** | The user-specified tags associated with the image template. | [optional] 

## Example

```python
from openapi_client.models.image_template_update_parameters import ImageTemplateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateUpdateParameters from a JSON string
image_template_update_parameters_instance = ImageTemplateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateUpdateParameters.to_json())

# convert the object into a dict
image_template_update_parameters_dict = image_template_update_parameters_instance.to_dict()
# create an instance of ImageTemplateUpdateParameters from a dict
image_template_update_parameters_from_dict = ImageTemplateUpdateParameters.from_dict(image_template_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


