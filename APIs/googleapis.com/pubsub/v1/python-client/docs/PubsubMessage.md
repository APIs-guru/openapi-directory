# PubsubMessage

A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription. | [optional] 
**data** | **bytearray** | Optional. The message data field. If this field is empty, the message must contain at least one attribute. | [optional] 
**message_id** | **str** | ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a &#x60;PubsubMessage&#x60; via a &#x60;Pull&#x60; call or a push delivery. It must not be populated by the publisher in a &#x60;Publish&#x60; call. | [optional] 
**ordering_key** | **str** | Optional. If non-empty, identifies related messages for which publish order should be respected. If a &#x60;Subscription&#x60; has &#x60;enable_message_ordering&#x60; set to &#x60;true&#x60;, messages published with the same non-empty &#x60;ordering_key&#x60; value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All &#x60;PubsubMessage&#x60;s published in a given &#x60;PublishRequest&#x60; must specify the same &#x60;ordering_key&#x60; value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering). | [optional] 
**publish_time** | **str** | The time at which the message was published, populated by the server when it receives the &#x60;Publish&#x60; call. It must not be populated by the publisher in a &#x60;Publish&#x60; call. | [optional] 

## Example

```python
from openapi_client.models.pubsub_message import PubsubMessage

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubMessage from a JSON string
pubsub_message_instance = PubsubMessage.from_json(json)
# print the JSON string representation of the object
print(PubsubMessage.to_json())

# convert the object into a dict
pubsub_message_dict = pubsub_message_instance.to_dict()
# create an instance of PubsubMessage from a dict
pubsub_message_from_dict = PubsubMessage.from_dict(pubsub_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


