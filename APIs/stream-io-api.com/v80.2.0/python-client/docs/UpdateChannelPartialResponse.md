# UpdateChannelPartialResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 
**members** | [**List[ChannelMember]**](ChannelMember.md) |  | 

## Example

```python
from openapi_client.models.update_channel_partial_response import UpdateChannelPartialResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChannelPartialResponse from a JSON string
update_channel_partial_response_instance = UpdateChannelPartialResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateChannelPartialResponse.to_json())

# convert the object into a dict
update_channel_partial_response_dict = update_channel_partial_response_instance.to_dict()
# create an instance of UpdateChannelPartialResponse from a dict
update_channel_partial_response_from_dict = UpdateChannelPartialResponse.from_dict(update_channel_partial_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


