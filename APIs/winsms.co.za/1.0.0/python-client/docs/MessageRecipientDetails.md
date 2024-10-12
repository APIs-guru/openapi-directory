# MessageRecipientDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_message_id** | **str** | ***Optional*** - A parameter to identify an individual SMS message recipient on your system. The clientMessageId parameter is NOT saved by the WinSMS API.   The value of the clientMessageId parameter is returned in the ***submittedRecipientResult*** object of the response, allowing you to match a sent message to a returned message result status.  | [optional] 
**mobile_number** | **str** | A recipient mobile number, using the international E164 (without the plus) format. | 

## Example

```python
from openapi_client.models.message_recipient_details import MessageRecipientDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MessageRecipientDetails from a JSON string
message_recipient_details_instance = MessageRecipientDetails.from_json(json)
# print the JSON string representation of the object
print(MessageRecipientDetails.to_json())

# convert the object into a dict
message_recipient_details_dict = message_recipient_details_instance.to_dict()
# create an instance of MessageRecipientDetails from a dict
message_recipient_details_from_dict = MessageRecipientDetails.from_dict(message_recipient_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


