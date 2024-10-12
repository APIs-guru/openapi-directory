# HtmlTemplateData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_additional_properties** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**editable_submissions** | **bool** |  | [optional] 
**expiration_interval** | **str** |  | [optional] 
**expire_after** | **float** |  | [optional] 
**expire_submissions** | **bool** |  | [optional] 
**footer_html** | **str** |  | [optional] 
**header_html** | **str** |  | [optional] 
**html** | **str** |  | [optional] 
**name** | **str** |  | 
**public_submissions** | **bool** |  | [optional] 
**public_web_form** | **bool** |  | [optional] 
**redirect_url** | **str** |  | [optional] 
**scss** | **str** |  | [optional] 
**slack_webhook_url** | **str** |  | [optional] 
**template_type** | **str** |  | [optional] 
**webhook_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.html_template_data import HtmlTemplateData

# TODO update the JSON string below
json = "{}"
# create an instance of HtmlTemplateData from a JSON string
html_template_data_instance = HtmlTemplateData.from_json(json)
# print the JSON string representation of the object
print(HtmlTemplateData.to_json())

# convert the object into a dict
html_template_data_dict = html_template_data_instance.to_dict()
# create an instance of HtmlTemplateData from a dict
html_template_data_from_dict = HtmlTemplateData.from_dict(html_template_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


