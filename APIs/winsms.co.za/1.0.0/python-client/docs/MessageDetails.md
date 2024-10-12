# MessageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_segments** | **int** | ***Optional*** - The maximum [GSM Encoded segment count](\&quot;https://support.winsms.co.za/rest/GSM\&quot;) that the message is allowed to utilise.  This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.  The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.  If you intend to send a message longer than 160 characters, this value should be specified.  | [optional] 
**message** | **str** | The SMS text to be sent. | 
**recipients** | [**List[MessageRecipientDetails]**](MessageRecipientDetails.md) | An array of messageRecipientDetails objects. | 
**scheduled_time** | **str** | ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.  If specified, this value should have the format YYYYMMDDHHmm.  | [optional] 

## Example

```python
from openapi_client.models.message_details import MessageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MessageDetails from a JSON string
message_details_instance = MessageDetails.from_json(json)
# print the JSON string representation of the object
print(MessageDetails.to_json())

# convert the object into a dict
message_details_dict = message_details_instance.to_dict()
# create an instance of MessageDetails from a dict
message_details_from_dict = MessageDetails.from_dict(message_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


