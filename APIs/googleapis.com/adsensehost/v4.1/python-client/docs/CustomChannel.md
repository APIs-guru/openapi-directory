# CustomChannel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code of this custom channel, not necessarily unique across ad clients. | [optional] 
**id** | **str** | Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsensehost#customChannel. | [optional] [default to 'adsensehost#customChannel']
**name** | **str** | Name of this custom channel. | [optional] 

## Example

```python
from openapi_client.models.custom_channel import CustomChannel

# TODO update the JSON string below
json = "{}"
# create an instance of CustomChannel from a JSON string
custom_channel_instance = CustomChannel.from_json(json)
# print the JSON string representation of the object
print(CustomChannel.to_json())

# convert the object into a dict
custom_channel_dict = custom_channel_instance.to_dict()
# create an instance of CustomChannel from a dict
custom_channel_from_dict = CustomChannel.from_dict(custom_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


