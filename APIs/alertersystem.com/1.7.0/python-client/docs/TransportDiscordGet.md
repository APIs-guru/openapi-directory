# TransportDiscordGet

The TransportDiscord resource is a collection of transports that carry dispatched alerts to the external Discord service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**discord_token** | **str** | The token for the Discord service. Stored in encrypted format. | 
**discord_webhook_id** | **str** | The webhook ID for the Discord service. | 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_discord_get import TransportDiscordGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportDiscordGet from a JSON string
transport_discord_get_instance = TransportDiscordGet.from_json(json)
# print the JSON string representation of the object
print(TransportDiscordGet.to_json())

# convert the object into a dict
transport_discord_get_dict = transport_discord_get_instance.to_dict()
# create an instance of TransportDiscordGet from a dict
transport_discord_get_from_dict = TransportDiscordGet.from_dict(transport_discord_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


