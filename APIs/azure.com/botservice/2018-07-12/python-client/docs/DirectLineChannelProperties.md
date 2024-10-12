# DirectLineChannelProperties

The parameters to provide for the Direct Line channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sites** | [**List[DirectLineSite]**](DirectLineSite.md) | The list of Direct Line sites | [optional] 

## Example

```python
from openapi_client.models.direct_line_channel_properties import DirectLineChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DirectLineChannelProperties from a JSON string
direct_line_channel_properties_instance = DirectLineChannelProperties.from_json(json)
# print the JSON string representation of the object
print(DirectLineChannelProperties.to_json())

# convert the object into a dict
direct_line_channel_properties_dict = direct_line_channel_properties_instance.to_dict()
# create an instance of DirectLineChannelProperties from a dict
direct_line_channel_properties_from_dict = DirectLineChannelProperties.from_dict(direct_line_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


