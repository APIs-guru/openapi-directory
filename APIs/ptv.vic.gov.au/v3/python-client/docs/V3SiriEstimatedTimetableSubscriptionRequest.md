# V3SiriEstimatedTimetableSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_address** | **str** | Siri Consumer Address - Baseline and Updates will be sent to this address | 
**initial_termination_time** | **datetime** | Siri Initial Termination Time - Expiry of the subscription | 
**preview_interval** | **str** | Siri Preview Interval | 
**siri_format** | **int** | Siri Message Format &#39;xml&#39; or &#39;json&#39; | 
**siri_version** | **str** | Siri Message Version &#39;1.3&#39; or &#39;2.0&#39; | 
**subscriber_ref** | **str** | Siri Subscriber Ref | 
**subscription_ref** | **str** | Siri Subscription Ref - Unique to a Subscriber Ref | 
**topics** | [**List[V3SiriSubscriptionTopic]**](V3SiriSubscriptionTopic.md) |  | 

## Example

```python
from openapi_client.models.v3_siri_estimated_timetable_subscription_request import V3SiriEstimatedTimetableSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriEstimatedTimetableSubscriptionRequest from a JSON string
v3_siri_estimated_timetable_subscription_request_instance = V3SiriEstimatedTimetableSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(V3SiriEstimatedTimetableSubscriptionRequest.to_json())

# convert the object into a dict
v3_siri_estimated_timetable_subscription_request_dict = v3_siri_estimated_timetable_subscription_request_instance.to_dict()
# create an instance of V3SiriEstimatedTimetableSubscriptionRequest from a dict
v3_siri_estimated_timetable_subscription_request_from_dict = V3SiriEstimatedTimetableSubscriptionRequest.from_dict(v3_siri_estimated_timetable_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


