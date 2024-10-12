# GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse

Response that contains the timestamps after the extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cycle_end_time** | **str** | The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, \&quot;cycleEndTime\&quot;:\&quot;2019-08-31T17:28:54.564Z\&quot; | [optional] 
**free_trial_end_time** | **str** | End of the free trial period, in ISO 8061 format. UTC timezone. Example, \&quot;freeTrialEndTime\&quot;:\&quot;2019-08-31T17:28:54.564Z\&quot; This time will be set the same as initial subscription creation time if no free trial period is offered to the partner. | [optional] 
**renewal_time** | **str** | Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: \&quot;2019-08-31T17:28:54.564Z\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_extend_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse from a JSON string
google_cloud_payments_reseller_subscription_v1_extend_subscription_response_instance = GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_extend_subscription_response_dict = google_cloud_payments_reseller_subscription_v1_extend_subscription_response_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse from a dict
google_cloud_payments_reseller_subscription_v1_extend_subscription_response_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse.from_dict(google_cloud_payments_reseller_subscription_v1_extend_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


