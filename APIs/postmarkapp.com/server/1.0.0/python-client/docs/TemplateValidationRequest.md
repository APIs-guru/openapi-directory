# TemplateValidationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_body** | **str** | The html body content to validate. Must be specified if Subject or TextBody are not. See our template language documentation for more information on the syntax for this field.  | [optional] 
**inline_css_for_html_test_render** | **bool** | When HtmlBody is specified, the test render will have style blocks inlined as style attributes on matching html elements. You may disable the css inlining behavior by passing false for this parameter.  | [optional] [default to True]
**subject** | **str** | The subject content to validate. Must be specified if HtmlBody or TextBody are not. See our template language documentation for more information on the syntax for this field.  | [optional] 
**test_render_model** | **object** | The model to be used when rendering test content. | [optional] 
**text_body** | **str** | The text body content to validate. Must be specified if HtmlBody or Subject are not. See our template language documentation for more information on the syntax for this field.  | [optional] 

## Example

```python
from openapi_client.models.template_validation_request import TemplateValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateValidationRequest from a JSON string
template_validation_request_instance = TemplateValidationRequest.from_json(json)
# print the JSON string representation of the object
print(TemplateValidationRequest.to_json())

# convert the object into a dict
template_validation_request_dict = template_validation_request_instance.to_dict()
# create an instance of TemplateValidationRequest from a dict
template_validation_request_from_dict = TemplateValidationRequest.from_dict(template_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


