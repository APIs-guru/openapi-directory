# Channel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address where notifications are delivered for this channel. | [optional] 
**expiration** | **str** | Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. | [optional] 
**id** | **str** | A UUID or similar unique string that identifies this channel. | [optional] 
**kind** | **str** | Identifies this as a notification channel used to watch for changes to a resource, which is \&quot;api#channel\&quot;. | [optional] [default to 'api#channel']
**params** | **Dict[str, str]** | Additional parameters controlling delivery channel behavior. Optional. | [optional] 
**payload** | **bool** | A Boolean value to indicate whether payload is wanted. Optional. | [optional] 
**resource_id** | **str** | An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. | [optional] 
**resource_uri** | **str** | A version-specific identifier for the watched resource. | [optional] 
**token** | **str** | An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. | [optional] 
**type** | **str** | The type of delivery mechanism used for this channel. Valid values are \&quot;web_hook\&quot; (or \&quot;webhook\&quot;). Both values refer to a channel where Http requests are used to deliver messages. | [optional] 

## Example

```python
from openapi_client.models.channel import Channel

# TODO update the JSON string below
json = "{}"
# create an instance of Channel from a JSON string
channel_instance = Channel.from_json(json)
# print the JSON string representation of the object
print(Channel.to_json())

# convert the object into a dict
channel_dict = channel_instance.to_dict()
# create an instance of Channel from a dict
channel_from_dict = Channel.from_dict(channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


