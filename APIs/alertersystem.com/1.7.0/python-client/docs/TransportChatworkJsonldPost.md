# TransportChatworkJsonldPost

The TransportChatwork resource is a collection of transports that carry dispatched alerts to the external Chatwork service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chatwork_api_token** | **str** | The API token for the Chatwork service. Stored in encrypted format. | 
**chatwork_room_id** | **str** | The room ID for the Chatwork service. | 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_chatwork_jsonld_post import TransportChatworkJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportChatworkJsonldPost from a JSON string
transport_chatwork_jsonld_post_instance = TransportChatworkJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportChatworkJsonldPost.to_json())

# convert the object into a dict
transport_chatwork_jsonld_post_dict = transport_chatwork_jsonld_post_instance.to_dict()
# create an instance of TransportChatworkJsonldPost from a dict
transport_chatwork_jsonld_post_from_dict = TransportChatworkJsonldPost.from_dict(transport_chatwork_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


