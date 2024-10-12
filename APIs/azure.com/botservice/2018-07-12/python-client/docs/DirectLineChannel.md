# DirectLineChannel

Direct Line channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DirectLineChannelProperties**](DirectLineChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.direct_line_channel import DirectLineChannel

# TODO update the JSON string below
json = "{}"
# create an instance of DirectLineChannel from a JSON string
direct_line_channel_instance = DirectLineChannel.from_json(json)
# print the JSON string representation of the object
print(DirectLineChannel.to_json())

# convert the object into a dict
direct_line_channel_dict = direct_line_channel_instance.to_dict()
# create an instance of DirectLineChannel from a dict
direct_line_channel_from_dict = DirectLineChannel.from_dict(direct_line_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


