# TransportChatworkGet

The TransportChatwork resource is a collection of transports that carry dispatched alerts to the external Chatwork service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chatwork_api_token** | **str** | The API token for the Chatwork service. Stored in encrypted format. | 
**chatwork_room_id** | **str** | The room ID for the Chatwork service. | 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_chatwork_get import TransportChatworkGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportChatworkGet from a JSON string
transport_chatwork_get_instance = TransportChatworkGet.from_json(json)
# print the JSON string representation of the object
print(TransportChatworkGet.to_json())

# convert the object into a dict
transport_chatwork_get_dict = transport_chatwork_get_instance.to_dict()
# create an instance of TransportChatworkGet from a dict
transport_chatwork_get_from_dict = TransportChatworkGet.from_dict(transport_chatwork_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


