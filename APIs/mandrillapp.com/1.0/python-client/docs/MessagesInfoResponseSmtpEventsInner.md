# MessagesInfoResponseSmtpEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diag** | **str** |  | [optional] 
**ts** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_info_response_smtp_events_inner import MessagesInfoResponseSmtpEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesInfoResponseSmtpEventsInner from a JSON string
messages_info_response_smtp_events_inner_instance = MessagesInfoResponseSmtpEventsInner.from_json(json)
# print the JSON string representation of the object
print(MessagesInfoResponseSmtpEventsInner.to_json())

# convert the object into a dict
messages_info_response_smtp_events_inner_dict = messages_info_response_smtp_events_inner_instance.to_dict()
# create an instance of MessagesInfoResponseSmtpEventsInner from a dict
messages_info_response_smtp_events_inner_from_dict = MessagesInfoResponseSmtpEventsInner.from_dict(messages_info_response_smtp_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


