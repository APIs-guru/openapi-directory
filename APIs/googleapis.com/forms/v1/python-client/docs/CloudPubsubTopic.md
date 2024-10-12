# CloudPubsubTopic

A Pub/Sub topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic_name** | **str** | Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub. | [optional] 

## Example

```python
from openapi_client.models.cloud_pubsub_topic import CloudPubsubTopic

# TODO update the JSON string below
json = "{}"
# create an instance of CloudPubsubTopic from a JSON string
cloud_pubsub_topic_instance = CloudPubsubTopic.from_json(json)
# print the JSON string representation of the object
print(CloudPubsubTopic.to_json())

# convert the object into a dict
cloud_pubsub_topic_dict = cloud_pubsub_topic_instance.to_dict()
# create an instance of CloudPubsubTopic from a dict
cloud_pubsub_topic_from_dict = CloudPubsubTopic.from_dict(cloud_pubsub_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


