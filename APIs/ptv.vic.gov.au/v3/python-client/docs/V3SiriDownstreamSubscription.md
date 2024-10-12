# V3SiriDownstreamSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_address** | **str** |  | [optional] 
**initial_termination_time** | **datetime** |  | [optional] 
**message_type** | **int** |  | [optional] 
**preview_interval** | **str** |  | [optional] 
**siri_format** | **int** |  | [optional] 
**siri_version** | **str** |  | [optional] 
**subscriber_ref** | **str** |  | [optional] 
**subscription_ref** | **str** |  | [optional] 
**topics** | [**List[V3SiriDownstreamSubscriptionTopic]**](V3SiriDownstreamSubscriptionTopic.md) |  | [optional] 
**validity_period_end** | **datetime** |  | [optional] 
**validity_period_start** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.v3_siri_downstream_subscription import V3SiriDownstreamSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriDownstreamSubscription from a JSON string
v3_siri_downstream_subscription_instance = V3SiriDownstreamSubscription.from_json(json)
# print the JSON string representation of the object
print(V3SiriDownstreamSubscription.to_json())

# convert the object into a dict
v3_siri_downstream_subscription_dict = v3_siri_downstream_subscription_instance.to_dict()
# create an instance of V3SiriDownstreamSubscription from a dict
v3_siri_downstream_subscription_from_dict = V3SiriDownstreamSubscription.from_dict(v3_siri_downstream_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


