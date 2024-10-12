# Pubsub

Represents a Pub/Sub transport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | **str** | Output only. The name of the Pub/Sub subscription created and managed by Eventarc system as a transport for the event delivery. Format: &#x60;projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}&#x60;. | [optional] [readonly] 
**topic** | **str** | Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: &#x60;projects/{PROJECT_ID}/topics/{TOPIC_NAME}&#x60;. You may set an existing topic for triggers of the type &#x60;google.cloud.pubsub.topic.v1.messagePublished&#x60; only. The topic you provide here will not be deleted by Eventarc at trigger deletion. | [optional] 

## Example

```python
from openapi_client.models.pubsub import Pubsub

# TODO update the JSON string below
json = "{}"
# create an instance of Pubsub from a JSON string
pubsub_instance = Pubsub.from_json(json)
# print the JSON string representation of the object
print(Pubsub.to_json())

# convert the object into a dict
pubsub_dict = pubsub_instance.to_dict()
# create an instance of Pubsub from a dict
pubsub_from_dict = Pubsub.from_dict(pubsub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


