# TemplateData


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
**name** | **str** |  | [optional] 
**public_submissions** | **bool** |  | [optional] 
**public_web_form** | **bool** |  | [optional] 
**redirect_url** | **str** |  | [optional] 
**scss** | **str** |  | [optional] 
**slack_webhook_url** | **str** |  | [optional] 
**webhook_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_data import TemplateData

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateData from a JSON string
template_data_instance = TemplateData.from_json(json)
# print the JSON string representation of the object
print(TemplateData.to_json())

# convert the object into a dict
template_data_dict = template_data_instance.to_dict()
# create an instance of TemplateData from a dict
template_data_from_dict = TemplateData.from_dict(template_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


