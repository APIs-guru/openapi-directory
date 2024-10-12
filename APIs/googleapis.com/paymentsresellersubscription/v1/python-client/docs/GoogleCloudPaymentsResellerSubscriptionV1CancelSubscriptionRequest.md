# GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest

Request to cancel a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_immediately** | **bool** | Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund. | [optional] 
**cancellation_reason** | **str** | Specifies the reason for the cancellation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_cancel_subscription_request import GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest from a JSON string
google_cloud_payments_reseller_subscription_v1_cancel_subscription_request_instance = GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_cancel_subscription_request_dict = google_cloud_payments_reseller_subscription_v1_cancel_subscription_request_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest from a dict
google_cloud_payments_reseller_subscription_v1_cancel_subscription_request_from_dict = GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest.from_dict(google_cloud_payments_reseller_subscription_v1_cancel_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


