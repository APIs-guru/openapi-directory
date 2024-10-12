# TransportDiscordPost

The TransportDiscord resource is a collection of transports that carry dispatched alerts to the external Discord service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**discord_token** | **str** | The token for the Discord service. Stored in encrypted format. | 
**discord_webhook_id** | **str** | The webhook ID for the Discord service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_discord_post import TransportDiscordPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportDiscordPost from a JSON string
transport_discord_post_instance = TransportDiscordPost.from_json(json)
# print the JSON string representation of the object
print(TransportDiscordPost.to_json())

# convert the object into a dict
transport_discord_post_dict = transport_discord_post_instance.to_dict()
# create an instance of TransportDiscordPost from a dict
transport_discord_post_from_dict = TransportDiscordPost.from_dict(transport_discord_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


