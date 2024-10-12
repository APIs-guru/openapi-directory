# TransportGoogleChatJsonldPost

The TransportGoogleChat resource is a collection of transports that carry dispatched alerts to the external Google Chat service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**google_chat_access_key** | **str** | The access key for the Google Chat service. | 
**google_chat_access_token** | **str** | The access token for the Google Chat service. Stored in encrypted format. | 
**google_chat_space** | **str** | The space name for the Google Chat service. | 
**google_chat_thread_key** | **str** | The optional thread key for the Google Chat service. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_google_chat_jsonld_post import TransportGoogleChatJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportGoogleChatJsonldPost from a JSON string
transport_google_chat_jsonld_post_instance = TransportGoogleChatJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportGoogleChatJsonldPost.to_json())

# convert the object into a dict
transport_google_chat_jsonld_post_dict = transport_google_chat_jsonld_post_instance.to_dict()
# create an instance of TransportGoogleChatJsonldPost from a dict
transport_google_chat_jsonld_post_from_dict = TransportGoogleChatJsonldPost.from_dict(transport_google_chat_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


