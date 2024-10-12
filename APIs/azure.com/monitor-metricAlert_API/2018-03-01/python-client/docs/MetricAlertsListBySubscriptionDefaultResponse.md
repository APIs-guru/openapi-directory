# MetricAlertsListBySubscriptionDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.metric_alerts_list_by_subscription_default_response import MetricAlertsListBySubscriptionDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertsListBySubscriptionDefaultResponse from a JSON string
metric_alerts_list_by_subscription_default_response_instance = MetricAlertsListBySubscriptionDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(MetricAlertsListBySubscriptionDefaultResponse.to_json())

# convert the object into a dict
metric_alerts_list_by_subscription_default_response_dict = metric_alerts_list_by_subscription_default_response_instance.to_dict()
# create an instance of MetricAlertsListBySubscriptionDefaultResponse from a dict
metric_alerts_list_by_subscription_default_response_from_dict = MetricAlertsListBySubscriptionDefaultResponse.from_dict(metric_alerts_list_by_subscription_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


