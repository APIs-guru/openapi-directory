# ChannelConnection

A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers create during the activation process to establish a connection between the provider and the subscriber channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_token** | **str** | Input only. Activation token for the channel. The token will be used during the creation of ChannelConnection to bind the channel with the provider project. This field will not be stored in the provider resource. | [optional] 
**channel** | **str** | Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross project and cross accounts references. This must be in &#x60;projects/{project}/location/{location}/channels/{channel_id}&#x60; format. | [optional] 
**create_time** | **str** | Output only. The creation time. | [optional] [readonly] 
**name** | **str** | Required. The name of the connection. | [optional] 
**uid** | **str** | Output only. Server assigned ID of the resource. The server guarantees uniqueness and immutability until deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.channel_connection import ChannelConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelConnection from a JSON string
channel_connection_instance = ChannelConnection.from_json(json)
# print the JSON string representation of the object
print(ChannelConnection.to_json())

# convert the object into a dict
channel_connection_dict = channel_connection_instance.to_dict()
# create an instance of ChannelConnection from a dict
channel_connection_from_dict = ChannelConnection.from_dict(channel_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


