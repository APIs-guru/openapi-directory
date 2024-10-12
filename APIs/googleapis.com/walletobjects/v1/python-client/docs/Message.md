# Message

A message that will be displayed with a Valuable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The message body. | [optional] 
**display_interval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**header** | **str** | The message header. | [optional] 
**id** | **str** | The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#walletObjectMessage\&quot;&#x60;. | [optional] 
**localized_body** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_header** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**message_type** | **str** | The message type. | [optional] 

## Example

```python
from openapi_client.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


