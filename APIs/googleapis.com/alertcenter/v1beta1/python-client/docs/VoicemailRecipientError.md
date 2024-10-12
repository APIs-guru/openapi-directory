# VoicemailRecipientError

Issue(s) with a voicemail recipient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address of the invalid recipient. This may be unavailable if the recipient was deleted. | [optional] 
**invalid_reason** | **str** | Reason for the error. | [optional] 

## Example

```python
from openapi_client.models.voicemail_recipient_error import VoicemailRecipientError

# TODO update the JSON string below
json = "{}"
# create an instance of VoicemailRecipientError from a JSON string
voicemail_recipient_error_instance = VoicemailRecipientError.from_json(json)
# print the JSON string representation of the object
print(VoicemailRecipientError.to_json())

# convert the object into a dict
voicemail_recipient_error_dict = voicemail_recipient_error_instance.to_dict()
# create an instance of VoicemailRecipientError from a dict
voicemail_recipient_error_from_dict = VoicemailRecipientError.from_dict(voicemail_recipient_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


