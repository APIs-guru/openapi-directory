# TransportRocketChatPut

The TransportRocketChat resource is a collection of transports that carry dispatched alerts to the external Rocket Chat service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**rocket_chat_channel** | **str** | The channel for the Rocket Chat service. | 
**rocket_chat_token** | **str** | The access token for the Rocket Chat service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_rocket_chat_put import TransportRocketChatPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportRocketChatPut from a JSON string
transport_rocket_chat_put_instance = TransportRocketChatPut.from_json(json)
# print the JSON string representation of the object
print(TransportRocketChatPut.to_json())

# convert the object into a dict
transport_rocket_chat_put_dict = transport_rocket_chat_put_instance.to_dict()
# create an instance of TransportRocketChatPut from a dict
transport_rocket_chat_put_from_dict = TransportRocketChatPut.from_dict(transport_rocket_chat_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


