# DeleteChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.delete_channel_response import DeleteChannelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteChannelResponse from a JSON string
delete_channel_response_instance = DeleteChannelResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteChannelResponse.to_json())

# convert the object into a dict
delete_channel_response_dict = delete_channel_response_instance.to_dict()
# create an instance of DeleteChannelResponse from a dict
delete_channel_response_from_dict = DeleteChannelResponse.from_dict(delete_channel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


