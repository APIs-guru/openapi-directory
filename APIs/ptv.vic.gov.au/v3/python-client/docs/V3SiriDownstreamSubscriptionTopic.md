# V3SiriDownstreamSubscriptionTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_ref** | **int** |  | [optional] 
**line_ref** | **str** |  | [optional] 
**route_type** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.v3_siri_downstream_subscription_topic import V3SiriDownstreamSubscriptionTopic

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriDownstreamSubscriptionTopic from a JSON string
v3_siri_downstream_subscription_topic_instance = V3SiriDownstreamSubscriptionTopic.from_json(json)
# print the JSON string representation of the object
print(V3SiriDownstreamSubscriptionTopic.to_json())

# convert the object into a dict
v3_siri_downstream_subscription_topic_dict = v3_siri_downstream_subscription_topic_instance.to_dict()
# create an instance of V3SiriDownstreamSubscriptionTopic from a dict
v3_siri_downstream_subscription_topic_from_dict = V3SiriDownstreamSubscriptionTopic.from_dict(v3_siri_downstream_subscription_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


