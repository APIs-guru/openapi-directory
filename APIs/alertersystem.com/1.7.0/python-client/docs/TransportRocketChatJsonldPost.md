# TransportRocketChatJsonldPost

The TransportRocketChat resource is a collection of transports that carry dispatched alerts to the external Rocket Chat service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**rocket_chat_channel** | **str** | The channel for the Rocket Chat service. | 
**rocket_chat_token** | **str** | The access token for the Rocket Chat service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_rocket_chat_jsonld_post import TransportRocketChatJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportRocketChatJsonldPost from a JSON string
transport_rocket_chat_jsonld_post_instance = TransportRocketChatJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportRocketChatJsonldPost.to_json())

# convert the object into a dict
transport_rocket_chat_jsonld_post_dict = transport_rocket_chat_jsonld_post_instance.to_dict()
# create an instance of TransportRocketChatJsonldPost from a dict
transport_rocket_chat_jsonld_post_from_dict = TransportRocketChatJsonldPost.from_dict(transport_rocket_chat_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


