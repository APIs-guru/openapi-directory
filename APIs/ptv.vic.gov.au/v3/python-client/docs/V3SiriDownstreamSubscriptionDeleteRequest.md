# V3SiriDownstreamSubscriptionDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriber_ref** | **str** | Siri Subscriber Ref | 
**subscription_ref** | **List[str]** | Siri Subscription Reference(s) - Unique to a Subscriber Ref.              If &#x60;null&#x60;, then all subscriptions will be terminated for the referenced Subscriber. | [optional] 

## Example

```python
from openapi_client.models.v3_siri_downstream_subscription_delete_request import V3SiriDownstreamSubscriptionDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriDownstreamSubscriptionDeleteRequest from a JSON string
v3_siri_downstream_subscription_delete_request_instance = V3SiriDownstreamSubscriptionDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(V3SiriDownstreamSubscriptionDeleteRequest.to_json())

# convert the object into a dict
v3_siri_downstream_subscription_delete_request_dict = v3_siri_downstream_subscription_delete_request_instance.to_dict()
# create an instance of V3SiriDownstreamSubscriptionDeleteRequest from a dict
v3_siri_downstream_subscription_delete_request_from_dict = V3SiriDownstreamSubscriptionDeleteRequest.from_dict(v3_siri_downstream_subscription_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


