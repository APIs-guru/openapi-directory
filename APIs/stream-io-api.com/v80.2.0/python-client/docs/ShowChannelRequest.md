# ShowChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.show_channel_request import ShowChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShowChannelRequest from a JSON string
show_channel_request_instance = ShowChannelRequest.from_json(json)
# print the JSON string representation of the object
print(ShowChannelRequest.to_json())

# convert the object into a dict
show_channel_request_dict = show_channel_request_instance.to_dict()
# create an instance of ShowChannelRequest from a dict
show_channel_request_from_dict = ShowChannelRequest.from_dict(show_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


