# SendEmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | [optional] 
**bcc** | **str** | Bcc recipient email address. Multiple addresses are comma seperated. Max 50. | [optional] 
**cc** | **str** | Recipient email address. Multiple addresses are comma seperated. Max 50. | [optional] 
**var_from** | **str** | The sender email address. Must have a registered and confirmed Sender Signature. | [optional] 
**headers** | [**List[MessageHeader]**](MessageHeader.md) |  | [optional] 
**html_body** | **str** | If no TextBody specified HTML email message | [optional] 
**reply_to** | **str** | Reply To override email address. Defaults to the Reply To set in the sender signature. | [optional] 
**subject** | **str** | Email Subject | [optional] 
**tag** | **str** | Email tag that allows you to categorize outgoing emails and get detailed statistics. | [optional] 
**text_body** | **str** | If no HtmlBody specified Plain text email message | [optional] 
**to** | **str** | Recipient email address. Multiple addresses are comma seperated. Max 50. | [optional] 
**track_links** | **str** | Replace links in content to enable \&quot;click tracking\&quot; stats. Default is &#39;null&#39;, which uses the server&#39;s LinkTracking setting&#39;. | [optional] 
**track_opens** | **bool** | Activate open tracking for this email. | [optional] 

## Example

```python
from openapi_client.models.send_email_request import SendEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendEmailRequest from a JSON string
send_email_request_instance = SendEmailRequest.from_json(json)
# print the JSON string representation of the object
print(SendEmailRequest.to_json())

# convert the object into a dict
send_email_request_dict = send_email_request_instance.to_dict()
# create an instance of SendEmailRequest from a dict
send_email_request_from_dict = SendEmailRequest.from_dict(send_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


