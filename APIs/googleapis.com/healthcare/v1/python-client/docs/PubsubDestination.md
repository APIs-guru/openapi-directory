# PubsubDestination

The Pub/Sub output destination. The Cloud Healthcare Service Agent requires the `roles/pubsub.publisher` Cloud IAM role on the Pub/Sub topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_topic** | **str** | The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that Pub/Sub messages are published on. Supplied by the client. The &#x60;PubsubMessage&#x60; contains the following fields: * &#x60;PubsubMessage.Data&#x60; contains the resource name. * &#x60;PubsubMessage.MessageId&#x60; is the ID of this notification. It is guaranteed to be unique within the topic. * &#x60;PubsubMessage.PublishTime&#x60; is the time when the message was published. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. | [optional] 

## Example

```python
from openapi_client.models.pubsub_destination import PubsubDestination

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubDestination from a JSON string
pubsub_destination_instance = PubsubDestination.from_json(json)
# print the JSON string representation of the object
print(PubsubDestination.to_json())

# convert the object into a dict
pubsub_destination_dict = pubsub_destination_instance.to_dict()
# create an instance of PubsubDestination from a dict
pubsub_destination_from_dict = PubsubDestination.from_dict(pubsub_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


