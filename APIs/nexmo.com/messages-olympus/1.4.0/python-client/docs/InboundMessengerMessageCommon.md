# InboundMessengerMessageCommon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The channel that the message came in on | 
**var_from** | **str** | The ID of the message sender  | 
**message_uuid** | **str** | The UUID of the message | 
**timestamp** | **str** | The datetime of when the event occurred, in &#x60;ISO 8601&#x60; format. | 
**to** | **str** | The ID of the message recipient  | 

## Example

```python
from openapi_client.models.inbound_messenger_message_common import InboundMessengerMessageCommon

# TODO update the JSON string below
json = "{}"
# create an instance of InboundMessengerMessageCommon from a JSON string
inbound_messenger_message_common_instance = InboundMessengerMessageCommon.from_json(json)
# print the JSON string representation of the object
print(InboundMessengerMessageCommon.to_json())

# convert the object into a dict
inbound_messenger_message_common_dict = inbound_messenger_message_common_instance.to_dict()
# create an instance of InboundMessengerMessageCommon from a dict
inbound_messenger_message_common_from_dict = InboundMessengerMessageCommon.from_dict(inbound_messenger_message_common_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


