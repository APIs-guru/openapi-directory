# Topic

A Pub/Sub topic which Secret Manager will publish to when control plane events occur on this secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The resource name of the Pub/Sub topic that will be published to, in the following format: &#x60;projects/*/topics/*&#x60;. For publication to succeed, the Secret Manager service agent must have the &#x60;pubsub.topic.publish&#x60; permission on the topic. The Pub/Sub Publisher role (&#x60;roles/pubsub.publisher&#x60;) includes this permission. | [optional] 

## Example

```python
from openapi_client.models.topic import Topic

# TODO update the JSON string below
json = "{}"
# create an instance of Topic from a JSON string
topic_instance = Topic.from_json(json)
# print the JSON string representation of the object
print(Topic.to_json())

# convert the object into a dict
topic_dict = topic_instance.to_dict()
# create an instance of Topic from a dict
topic_from_dict = Topic.from_dict(topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


