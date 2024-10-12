# UnmuteChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_cid** | **str** |  | 
**channel_cids** | **List[str]** |  | 
**expiration** | **int** |  | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unmute_channel_request import UnmuteChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnmuteChannelRequest from a JSON string
unmute_channel_request_instance = UnmuteChannelRequest.from_json(json)
# print the JSON string representation of the object
print(UnmuteChannelRequest.to_json())

# convert the object into a dict
unmute_channel_request_dict = unmute_channel_request_instance.to_dict()
# create an instance of UnmuteChannelRequest from a dict
unmute_channel_request_from_dict = UnmuteChannelRequest.from_dict(unmute_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


