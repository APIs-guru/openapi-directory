# SkypeChannel

Skype channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SkypeChannelProperties**](SkypeChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.skype_channel import SkypeChannel

# TODO update the JSON string below
json = "{}"
# create an instance of SkypeChannel from a JSON string
skype_channel_instance = SkypeChannel.from_json(json)
# print the JSON string representation of the object
print(SkypeChannel.to_json())

# convert the object into a dict
skype_channel_dict = skype_channel_instance.to_dict()
# create an instance of SkypeChannel from a dict
skype_channel_from_dict = SkypeChannel.from_dict(skype_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


