# V3SiriSubscriptionTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_ref** | **int** | Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound) | [optional] 
**line_ref** | **str** | Siri LineRef | 
**route_type** | **int** | Route Type eg. 0 (Train) 1 (Tram) 2 (Bus) 3 (Vline) 4 (NightRider) | 

## Example

```python
from openapi_client.models.v3_siri_subscription_topic import V3SiriSubscriptionTopic

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriSubscriptionTopic from a JSON string
v3_siri_subscription_topic_instance = V3SiriSubscriptionTopic.from_json(json)
# print the JSON string representation of the object
print(V3SiriSubscriptionTopic.to_json())

# convert the object into a dict
v3_siri_subscription_topic_dict = v3_siri_subscription_topic_instance.to_dict()
# create an instance of V3SiriSubscriptionTopic from a dict
v3_siri_subscription_topic_from_dict = V3SiriSubscriptionTopic.from_dict(v3_siri_subscription_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


