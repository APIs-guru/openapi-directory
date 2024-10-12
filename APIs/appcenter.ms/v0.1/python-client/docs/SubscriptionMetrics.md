# SubscriptionMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_count** | **float** | The number of messages in the subscription | 
**name** | **str** | The name of the subsciption (prefixed with the topic name) | 

## Example

```python
from openapi_client.models.subscription_metrics import SubscriptionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionMetrics from a JSON string
subscription_metrics_instance = SubscriptionMetrics.from_json(json)
# print the JSON string representation of the object
print(SubscriptionMetrics.to_json())

# convert the object into a dict
subscription_metrics_dict = subscription_metrics_instance.to_dict()
# create an instance of SubscriptionMetrics from a dict
subscription_metrics_from_dict = SubscriptionMetrics.from_dict(subscription_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


