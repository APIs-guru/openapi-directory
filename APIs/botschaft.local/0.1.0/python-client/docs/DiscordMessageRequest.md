# DiscordMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_message** | **str** |  | [optional] 
**channel** | **str** |  | 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.discord_message_request import DiscordMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiscordMessageRequest from a JSON string
discord_message_request_instance = DiscordMessageRequest.from_json(json)
# print the JSON string representation of the object
print(DiscordMessageRequest.to_json())

# convert the object into a dict
discord_message_request_dict = discord_message_request_instance.to_dict()
# create an instance of DiscordMessageRequest from a dict
discord_message_request_from_dict = DiscordMessageRequest.from_dict(discord_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


