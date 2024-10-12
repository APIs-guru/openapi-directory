# GmailMessageInfo

Details of a message in phishing spike alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments_sha256_hash** | **List[str]** | The &#x60;SHA256&#x60; hash of email&#39;s attachment and all MIME parts. | [optional] 
**var_date** | **str** | The date of the event related to this email. | [optional] 
**md5_hash_message_body** | **str** | The hash of the message body text. | [optional] 
**md5_hash_subject** | **str** | The MD5 Hash of email&#39;s subject (only available for reported emails). | [optional] 
**message_body_snippet** | **str** | The snippet of the message body text (only available for reported emails). | [optional] 
**message_id** | **str** | The message ID. | [optional] 
**recipient** | **str** | The recipient of this email. | [optional] 
**sent_time** | **str** | The sent time of the email. | [optional] 
**subject_text** | **str** | The email subject text (only available for reported emails). | [optional] 

## Example

```python
from openapi_client.models.gmail_message_info import GmailMessageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GmailMessageInfo from a JSON string
gmail_message_info_instance = GmailMessageInfo.from_json(json)
# print the JSON string representation of the object
print(GmailMessageInfo.to_json())

# convert the object into a dict
gmail_message_info_dict = gmail_message_info_instance.to_dict()
# create an instance of GmailMessageInfo from a dict
gmail_message_info_from_dict = GmailMessageInfo.from_dict(gmail_message_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


