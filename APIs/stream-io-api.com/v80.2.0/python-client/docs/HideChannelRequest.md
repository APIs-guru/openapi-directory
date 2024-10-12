# HideChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_history** | **bool** | Whether to clear message history of the channel or not | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.hide_channel_request import HideChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HideChannelRequest from a JSON string
hide_channel_request_instance = HideChannelRequest.from_json(json)
# print the JSON string representation of the object
print(HideChannelRequest.to_json())

# convert the object into a dict
hide_channel_request_dict = hide_channel_request_instance.to_dict()
# create an instance of HideChannelRequest from a dict
hide_channel_request_from_dict = HideChannelRequest.from_dict(hide_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


