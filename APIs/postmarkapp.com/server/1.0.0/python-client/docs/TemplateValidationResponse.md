# TemplateValidationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_content_is_valid** | **bool** |  | [optional] 
**html_body** | [**TemplateValidationResult**](TemplateValidationResult.md) |  | [optional] 
**subject** | [**TemplateValidationResult**](TemplateValidationResult.md) |  | [optional] 
**suggested_template_model** | **object** |  | [optional] 
**text_body** | [**TemplateValidationResult**](TemplateValidationResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_validation_response import TemplateValidationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateValidationResponse from a JSON string
template_validation_response_instance = TemplateValidationResponse.from_json(json)
# print the JSON string representation of the object
print(TemplateValidationResponse.to_json())

# convert the object into a dict
template_validation_response_dict = template_validation_response_instance.to_dict()
# create an instance of TemplateValidationResponse from a dict
template_validation_response_from_dict = TemplateValidationResponse.from_dict(template_validation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


