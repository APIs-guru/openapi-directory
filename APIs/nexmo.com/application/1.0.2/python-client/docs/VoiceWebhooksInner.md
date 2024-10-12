# VoiceWebhooksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | &#x60;answer_url&#x60;: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to answer_url. &#x60;event_url&#x60;: Nexmo sends event information asynchronously to this URL when status changes. | 
**endpoint_type** | **str** |  | 
**http_method** | **str** | The HTTP method used to send event information to the &#x60;event_url&#x60; or &#x60;answer_url&#x60;. | 

## Example

```python
from openapi_client.models.voice_webhooks_inner import VoiceWebhooksInner

# TODO update the JSON string below
json = "{}"
# create an instance of VoiceWebhooksInner from a JSON string
voice_webhooks_inner_instance = VoiceWebhooksInner.from_json(json)
# print the JSON string representation of the object
print(VoiceWebhooksInner.to_json())

# convert the object into a dict
voice_webhooks_inner_dict = voice_webhooks_inner_instance.to_dict()
# create an instance of VoiceWebhooksInner from a dict
voice_webhooks_inner_from_dict = VoiceWebhooksInner.from_dict(voice_webhooks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


