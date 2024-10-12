# ChannelRequired


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_broadcast_only** | **bool** |  | [optional] [default to False]
**title** | **str** |  | 

## Example

```python
from openapi_client.models.channel_required import ChannelRequired

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelRequired from a JSON string
channel_required_instance = ChannelRequired.from_json(json)
# print the JSON string representation of the object
print(ChannelRequired.to_json())

# convert the object into a dict
channel_required_dict = channel_required_instance.to_dict()
# create an instance of ChannelRequired from a dict
channel_required_from_dict = ChannelRequired.from_dict(channel_required_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


