# Subscription

A subscription resource. If none of `push_config`, `bigquery_config`, or `cloud_storage_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_deadline_seconds** | **int** | Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be _outstanding_. During that time period, the message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call &#x60;ModifyAckDeadline&#x60; with the corresponding &#x60;ack_id&#x60; if using non-streaming pull or send the &#x60;ack_id&#x60; in a &#x60;StreamingModifyAckDeadlineRequest&#x60; if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push delivery, this value is also used to set the request timeout for the call to the push endpoint. If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message. | [optional] 
**bigquery_config** | [**BigQueryConfig**](BigQueryConfig.md) |  | [optional] 
**cloud_storage_config** | [**CloudStorageConfig**](CloudStorageConfig.md) |  | [optional] 
**dead_letter_policy** | [**DeadLetterPolicy**](DeadLetterPolicy.md) |  | [optional] 
**detached** | **bool** | Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don&#39;t receive messages from their topic and don&#39;t retain any backlog. &#x60;Pull&#x60; and &#x60;StreamingPull&#x60; requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made. | [optional] 
**enable_exactly_once_delivery** | **bool** | Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of &#x60;message_id&#x60; on this subscription: * The message sent to a subscriber is guaranteed not to be resent before the message&#39;s acknowledgement deadline expires. * An acknowledged message will not be resent to a subscriber. Note that subscribers may still receive multiple copies of a message when &#x60;enable_exactly_once_delivery&#x60; is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct &#x60;message_id&#x60; values. | [optional] 
**enable_message_ordering** | **bool** | Optional. If true, messages published with the same &#x60;ordering_key&#x60; in &#x60;PubsubMessage&#x60; will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order. | [optional] 
**expiration_policy** | [**ExpirationPolicy**](ExpirationPolicy.md) |  | [optional] 
**filter** | **str** | Optional. An expression written in the Pub/Sub [filter language](https://cloud.google.com/pubsub/docs/filtering). If non-empty, then only &#x60;PubsubMessage&#x60;s whose &#x60;attributes&#x60; field matches the filter are delivered on this subscription. If empty, then no messages are filtered out. | [optional] 
**labels** | **Dict[str, str]** | Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels). | [optional] 
**message_retention_duration** | **str** | Optional. How long to retain unacknowledged messages in the subscription&#39;s backlog, from the moment a message is published. If &#x60;retain_acked_messages&#x60; is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a &#x60;Seek&#x60; can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10 minutes. | [optional] 
**name** | **str** | Required. The name of the subscription. It must have the format &#x60;\&quot;projects/{project}/subscriptions/{subscription}\&quot;&#x60;. &#x60;{subscription}&#x60; must start with a letter, and contain only letters (&#x60;[A-Za-z]&#x60;), numbers (&#x60;[0-9]&#x60;), dashes (&#x60;-&#x60;), underscores (&#x60;_&#x60;), periods (&#x60;.&#x60;), tildes (&#x60;~&#x60;), plus (&#x60;+&#x60;) or percent signs (&#x60;%&#x60;). It must be between 3 and 255 characters in length, and it must not start with &#x60;\&quot;goog\&quot;&#x60;. | [optional] 
**push_config** | [**PushConfig**](PushConfig.md) |  | [optional] 
**retain_acked_messages** | **bool** | Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription&#39;s backlog, even if they are acknowledged, until they fall out of the &#x60;message_retention_duration&#x60; window. This must be true if you would like to [&#x60;Seek&#x60; to a timestamp] (https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) in the past to replay previously-acknowledged messages. | [optional] 
**retry_policy** | [**RetryPolicy**](RetryPolicy.md) |  | [optional] 
**state** | **str** | Output only. An output-only field indicating whether or not the subscription can receive messages. | [optional] [readonly] 
**topic** | **str** | Required. The name of the topic from which this subscription is receiving messages. Format is &#x60;projects/{project}/topics/{topic}&#x60;. The value of this field will be &#x60;_deleted-topic_&#x60; if the topic has been deleted. | [optional] 
**topic_message_retention_duration** | **str** | Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription&#39;s topic. If this field is set, messages published to the subscription&#39;s topic in the last &#x60;topic_message_retention_duration&#x60; are always available to subscribers. See the &#x60;message_retention_duration&#x60; field in &#x60;Topic&#x60;. This field is set only in responses from the server; it is ignored if it is set in any requests. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


