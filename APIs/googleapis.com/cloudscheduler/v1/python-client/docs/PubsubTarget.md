# PubsubTarget

Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. | [optional] 
**data** | **bytearray** | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. | [optional] 
**topic_name** | **str** | Required. The name of the Cloud Pub/Sub topic to which messages will be published when a job is delivered. The topic name must be in the same format as required by Pub/Sub&#39;s [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest), for example &#x60;projects/PROJECT_ID/topics/TOPIC_ID&#x60;. The topic must be in the same project as the Cloud Scheduler job. | [optional] 

## Example

```python
from openapi_client.models.pubsub_target import PubsubTarget

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubTarget from a JSON string
pubsub_target_instance = PubsubTarget.from_json(json)
# print the JSON string representation of the object
print(PubsubTarget.to_json())

# convert the object into a dict
pubsub_target_dict = pubsub_target_instance.to_dict()
# create an instance of PubsubTarget from a dict
pubsub_target_from_dict = PubsubTarget.from_dict(pubsub_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


