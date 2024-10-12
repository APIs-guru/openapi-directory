# VoicemailMisconfiguration

Issue(s) with sending to voicemail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[VoicemailRecipientError]**](VoicemailRecipientError.md) | Issue(s) with voicemail recipients. | [optional] 

## Example

```python
from openapi_client.models.voicemail_misconfiguration import VoicemailMisconfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VoicemailMisconfiguration from a JSON string
voicemail_misconfiguration_instance = VoicemailMisconfiguration.from_json(json)
# print the JSON string representation of the object
print(VoicemailMisconfiguration.to_json())

# convert the object into a dict
voicemail_misconfiguration_dict = voicemail_misconfiguration_instance.to_dict()
# create an instance of VoicemailMisconfiguration from a dict
voicemail_misconfiguration_from_dict = VoicemailMisconfiguration.from_dict(voicemail_misconfiguration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


