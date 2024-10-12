# ChannelGetOrCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**connection_id** | **str** |  | [optional] 
**data** | [**ChannelRequest**](ChannelRequest.md) |  | [optional] 
**hide_for_creator** | **bool** | Whether this channel will be hidden for the user who created the channel or not | [optional] 
**members** | [**PaginationParamsRequest**](PaginationParamsRequest.md) |  | [optional] 
**messages** | [**MessagePaginationParamsRequest**](MessagePaginationParamsRequest.md) |  | [optional] 
**presence** | **bool** | Fetch user presence info | [optional] 
**state** | **bool** | Refresh channel state | [optional] 
**watch** | **bool** | Start watching the channel | [optional] 
**watchers** | [**PaginationParamsRequest**](PaginationParamsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.channel_get_or_create_request import ChannelGetOrCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelGetOrCreateRequest from a JSON string
channel_get_or_create_request_instance = ChannelGetOrCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelGetOrCreateRequest.to_json())

# convert the object into a dict
channel_get_or_create_request_dict = channel_get_or_create_request_instance.to_dict()
# create an instance of ChannelGetOrCreateRequest from a dict
channel_get_or_create_request_from_dict = ChannelGetOrCreateRequest.from_dict(channel_get_or_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


