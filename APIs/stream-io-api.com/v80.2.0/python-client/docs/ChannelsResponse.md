# ChannelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[ChannelStateResponseFields]**](ChannelStateResponseFields.md) | List of channels | 
**duration** | **str** |  | 

## Example

```python
from openapi_client.models.channels_response import ChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelsResponse from a JSON string
channels_response_instance = ChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ChannelsResponse.to_json())

# convert the object into a dict
channels_response_dict = channels_response_instance.to_dict()
# create an instance of ChannelsResponse from a dict
channels_response_from_dict = ChannelsResponse.from_dict(channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


