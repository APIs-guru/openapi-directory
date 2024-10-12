# TemplateDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Indicates that this template may be used for sending email. | [optional] 
**alias** | **str** | The user-supplied alias for this template. | [optional] 
**associated_server_id** | **int** | The ID of the Server with which this template is associated. | [optional] 
**html_body** | **str** | The content to use for the HtmlBody when this template is used to send email. | [optional] 
**name** | **str** | The display name for the template. | [optional] 
**subject** | **str** | The content to use for the Subject when this template is used to send email. | [optional] 
**template_id** | **int** | The ID associated with the template. | [optional] 
**text_body** | **str** | The content to use for the TextBody when this template is used to send email. | [optional] 

## Example

```python
from openapi_client.models.template_detail_response import TemplateDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDetailResponse from a JSON string
template_detail_response_instance = TemplateDetailResponse.from_json(json)
# print the JSON string representation of the object
print(TemplateDetailResponse.to_json())

# convert the object into a dict
template_detail_response_dict = template_detail_response_instance.to_dict()
# create an instance of TemplateDetailResponse from a dict
template_detail_response_from_dict = TemplateDetailResponse.from_dict(template_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


