# TruncateChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard_delete** | **bool** | Permanently delete channel data (messages, reactions, etc.) | [optional] 
**message** | [**MessageRequest**](MessageRequest.md) |  | [optional] 
**skip_push** | **bool** | When &#x60;message&#x60; is set disables all push notifications for it | [optional] 
**truncated_at** | **datetime** | Truncate channel data up to &#x60;truncated_at&#x60;. The system message (if provided) creation time is always greater than &#x60;truncated_at&#x60; | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.truncate_channel_request import TruncateChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TruncateChannelRequest from a JSON string
truncate_channel_request_instance = TruncateChannelRequest.from_json(json)
# print the JSON string representation of the object
print(TruncateChannelRequest.to_json())

# convert the object into a dict
truncate_channel_request_dict = truncate_channel_request_instance.to_dict()
# create an instance of TruncateChannelRequest from a dict
truncate_channel_request_from_dict = TruncateChannelRequest.from_dict(truncate_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


