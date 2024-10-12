# SendMessagesRequestPhoneNumberFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**MessageConversation**](MessageConversation.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_messages_request_phone_number_filter import SendMessagesRequestPhoneNumberFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessagesRequestPhoneNumberFilter from a JSON string
send_messages_request_phone_number_filter_instance = SendMessagesRequestPhoneNumberFilter.from_json(json)
# print the JSON string representation of the object
print(SendMessagesRequestPhoneNumberFilter.to_json())

# convert the object into a dict
send_messages_request_phone_number_filter_dict = send_messages_request_phone_number_filter_instance.to_dict()
# create an instance of SendMessagesRequestPhoneNumberFilter from a dict
send_messages_request_phone_number_filter_from_dict = SendMessagesRequestPhoneNumberFilter.from_dict(send_messages_request_phone_number_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


