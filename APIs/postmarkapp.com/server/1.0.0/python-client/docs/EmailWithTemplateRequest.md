# EmailWithTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | [optional] 
**bcc** | **str** |  | [optional] 
**cc** | **str** |  | [optional] 
**var_from** | **str** |  | 
**headers** | [**List[MessageHeader]**](MessageHeader.md) |  | [optional] 
**inline_css** | **bool** |  | [optional] [default to True]
**reply_to** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**template_alias** | **str** | Required if &#39;TemplateId&#39; is not specified. | 
**template_id** | **int** | Required if &#39;TemplateAlias&#39; is not specified. | 
**template_model** | **object** |  | 
**to** | **str** |  | 
**track_links** | **str** | Replace links in content to enable \&quot;click tracking\&quot; stats. Default is &#39;null&#39;, which uses the server&#39;s LinkTracking setting&#39;. | [optional] 
**track_opens** | **bool** | Activate open tracking for this email. | [optional] 

## Example

```python
from openapi_client.models.email_with_template_request import EmailWithTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailWithTemplateRequest from a JSON string
email_with_template_request_instance = EmailWithTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(EmailWithTemplateRequest.to_json())

# convert the object into a dict
email_with_template_request_dict = email_with_template_request_instance.to_dict()
# create an instance of EmailWithTemplateRequest from a dict
email_with_template_request_from_dict = EmailWithTemplateRequest.from_dict(email_with_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


