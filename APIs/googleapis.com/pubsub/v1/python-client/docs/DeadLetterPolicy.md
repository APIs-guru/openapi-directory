# DeadLetterPolicy

Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dead_letter_topic** | **str** | Optional. The name of the topic to which dead letter messages should be published. Format is &#x60;projects/{project}/topics/{topic}&#x60;.The Pub/Sub service account associated with the enclosing subscription&#39;s parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic. The operation will fail if the topic does not exist. Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost. | [optional] 
**max_delivery_attempts** | **int** | Optional. The maximum number of delivery attempts for any message. The value must be between 5 and 100. The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times the acknowledgement deadline has been exceeded for the message). A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a default value of 5 is used. | [optional] 

## Example

```python
from openapi_client.models.dead_letter_policy import DeadLetterPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DeadLetterPolicy from a JSON string
dead_letter_policy_instance = DeadLetterPolicy.from_json(json)
# print the JSON string representation of the object
print(DeadLetterPolicy.to_json())

# convert the object into a dict
dead_letter_policy_dict = dead_letter_policy_instance.to_dict()
# create an instance of DeadLetterPolicy from a dict
dead_letter_policy_from_dict = DeadLetterPolicy.from_dict(dead_letter_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


