# TruncateChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.truncate_channel_response import TruncateChannelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TruncateChannelResponse from a JSON string
truncate_channel_response_instance = TruncateChannelResponse.from_json(json)
# print the JSON string representation of the object
print(TruncateChannelResponse.to_json())

# convert the object into a dict
truncate_channel_response_dict = truncate_channel_response_instance.to_dict()
# create an instance of TruncateChannelResponse from a dict
truncate_channel_response_from_dict = TruncateChannelResponse.from_dict(truncate_channel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


