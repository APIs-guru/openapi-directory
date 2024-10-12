# TransportDiscordJsonldPut

The TransportDiscord resource is a collection of transports that carry dispatched alerts to the external Discord service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**discord_token** | **str** | The token for the Discord service. Stored in encrypted format. | 
**discord_webhook_id** | **str** | The webhook ID for the Discord service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_discord_jsonld_put import TransportDiscordJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportDiscordJsonldPut from a JSON string
transport_discord_jsonld_put_instance = TransportDiscordJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportDiscordJsonldPut.to_json())

# convert the object into a dict
transport_discord_jsonld_put_dict = transport_discord_jsonld_put_instance.to_dict()
# create an instance of TransportDiscordJsonldPut from a dict
transport_discord_jsonld_put_from_dict = TransportDiscordJsonldPut.from_dict(transport_discord_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


