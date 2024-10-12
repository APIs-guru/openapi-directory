# EventTrigger

Describes EventTrigger, used to request events be sent from another service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | Required. The type of event to observe. For example: &#x60;providers/cloud.storage/eventTypes/object.change&#x60; and &#x60;providers/cloud.pubsub/eventTypes/topic.publish&#x60;. Event types match pattern &#x60;providers/*/eventTypes/*.*&#x60;. The pattern contains: 1. namespace: For example, &#x60;cloud.storage&#x60; and &#x60;google.firebase.analytics&#x60;. 2. resource type: The type of resource on which event occurs. For example, the Google Cloud Storage API includes the type &#x60;object&#x60;. 3. action: The action that generates the event. For example, action for a Google Cloud Storage Object is &#39;change&#39;. These parts are lower case. | [optional] 
**failure_policy** | [**FailurePolicy**](FailurePolicy.md) |  | [optional] 
**resource** | **str** | Required. The resource(s) from which to observe events, for example, &#x60;projects/_/buckets/myBucket&#x60;. Not all syntactically correct values are accepted by all services. For example: 1. The authorization model must support it. Google Cloud Functions only allows EventTriggers to be deployed that observe resources in the same project as the &#x60;CloudFunction&#x60;. 2. The resource type must match the pattern expected for an &#x60;event_type&#x60;. For example, an &#x60;EventTrigger&#x60; that has an &#x60;event_type&#x60; of \&quot;google.pubsub.topic.publish\&quot; should have a resource that matches Google Cloud Pub/Sub topics. Additionally, some services may support short names when creating an &#x60;EventTrigger&#x60;. These will always be returned in the normalized \&quot;long\&quot; format. See each *service&#39;s* documentation for supported formats. | [optional] 
**service** | **str** | The hostname of the service that should be observed. If no string is provided, the default service implementing the API will be used. For example, &#x60;storage.googleapis.com&#x60; is the default for all event types in the &#x60;google.storage&#x60; namespace. | [optional] 

## Example

```python
from openapi_client.models.event_trigger import EventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of EventTrigger from a JSON string
event_trigger_instance = EventTrigger.from_json(json)
# print the JSON string representation of the object
print(EventTrigger.to_json())

# convert the object into a dict
event_trigger_dict = event_trigger_instance.to_dict()
# create an instance of EventTrigger from a dict
event_trigger_from_dict = EventTrigger.from_dict(event_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


