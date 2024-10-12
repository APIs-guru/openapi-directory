# Channel

A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_token** | **str** | Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing. | [optional] [readonly] 
**create_time** | **str** | Output only. The creation time. | [optional] [readonly] 
**crypto_key_name** | **str** | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. | [optional] 
**name** | **str** | Required. The resource name of the channel. Must be unique within the location on the project and must be in &#x60;projects/{project}/locations/{location}/channels/{channel_id}&#x60; format. | [optional] 
**provider** | **str** | The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: &#x60;projects/{project}/locations/{location}/providers/{provider_id}&#x60;. | [optional] 
**pubsub_topic** | **str** | Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: &#x60;projects/{project}/topics/{topic_id}&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. The state of a Channel. | [optional] [readonly] 
**uid** | **str** | Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 

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


