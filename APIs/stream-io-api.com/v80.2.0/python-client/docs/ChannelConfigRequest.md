# ChannelConfigRequest

Channel configuration overrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocklist** | **str** |  | [optional] 
**blocklist_behavior** | **str** |  | [optional] 
**commands** | **List[str]** |  | [optional] 
**grants** | **Dict[str, List[str]]** |  | [optional] 
**max_message_length** | **int** | Overrides max message length | [optional] 
**quotes** | **bool** | Enables message quotes | [optional] 
**reactions** | **bool** | Enables or disables reactions | [optional] 
**replies** | **bool** | Enables message replies (threads) | [optional] 
**typing_events** | **bool** | Enables or disables typing events | [optional] 
**uploads** | **bool** | Enables or disables file uploads | [optional] 
**url_enrichment** | **bool** | Enables or disables URL enrichment | [optional] 

## Example

```python
from openapi_client.models.channel_config_request import ChannelConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConfigRequest from a JSON string
channel_config_request_instance = ChannelConfigRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelConfigRequest.to_json())

# convert the object into a dict
channel_config_request_dict = channel_config_request_instance.to_dict()
# create an instance of ChannelConfigRequest from a dict
channel_config_request_from_dict = ChannelConfigRequest.from_dict(channel_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


