# KikChannel

Kik channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**KikChannelProperties**](KikChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.kik_channel import KikChannel

# TODO update the JSON string below
json = "{}"
# create an instance of KikChannel from a JSON string
kik_channel_instance = KikChannel.from_json(json)
# print the JSON string representation of the object
print(KikChannel.to_json())

# convert the object into a dict
kik_channel_dict = kik_channel_instance.to_dict()
# create an instance of KikChannel from a dict
kik_channel_from_dict = KikChannel.from_dict(kik_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


