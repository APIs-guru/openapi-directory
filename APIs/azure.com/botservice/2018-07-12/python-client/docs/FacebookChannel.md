# FacebookChannel

Facebook channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FacebookChannelProperties**](FacebookChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.facebook_channel import FacebookChannel

# TODO update the JSON string below
json = "{}"
# create an instance of FacebookChannel from a JSON string
facebook_channel_instance = FacebookChannel.from_json(json)
# print the JSON string representation of the object
print(FacebookChannel.to_json())

# convert the object into a dict
facebook_channel_dict = facebook_channel_instance.to_dict()
# create an instance of FacebookChannel from a dict
facebook_channel_from_dict = FacebookChannel.from_dict(facebook_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


