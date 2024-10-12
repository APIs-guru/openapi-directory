# Channel

A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the channel was created. | [optional] [readonly] 
**expire_time** | **str** | The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it&#39;s set directly or via the &#x60;ttl&#x60; field. | [optional] 
**labels** | **Dict[str, str]** | Text labels used for extra metadata and/or filtering. | [optional] 
**name** | **str** | The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID | [optional] 
**release** | [**Release**](Release.md) |  | [optional] 
**retained_release_count** | **int** | The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels. | [optional] 
**ttl** | **str** | Input only. A time-to-live for this channel. Sets &#x60;expire_time&#x60; to the provided duration past the time of the request. | [optional] 
**update_time** | **str** | Output only. The time at which the channel was last updated. | [optional] [readonly] 
**url** | **str** | Output only. The URL at which the content of this channel&#39;s current release can be viewed. This URL is a Firebase-provided subdomain of &#x60;web.app&#x60;. The content of this channel&#39;s current release can also be viewed at the Firebase-provided subdomain of &#x60;firebaseapp.com&#x60;. If this channel is the &#x60;live&#x60; channel for the Hosting site, then the content of this channel&#39;s current release can also be viewed at any connected custom domains. | [optional] [readonly] 

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


