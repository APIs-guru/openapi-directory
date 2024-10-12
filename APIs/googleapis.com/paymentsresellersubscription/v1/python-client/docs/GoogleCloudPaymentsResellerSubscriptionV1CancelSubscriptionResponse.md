# GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse

Response that contains the cancelled subscription resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**GoogleCloudPaymentsResellerSubscriptionV1Subscription**](GoogleCloudPaymentsResellerSubscriptionV1Subscription.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_cancel_subscription_response import GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse from a JSON string
google_cloud_payments_reseller_subscription_v1_cancel_subscription_response_instance = GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_cancel_subscription_response_dict = google_cloud_payments_reseller_subscription_v1_cancel_subscription_response_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse from a dict
google_cloud_payments_reseller_subscription_v1_cancel_subscription_response_from_dict = GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse.from_dict(google_cloud_payments_reseller_subscription_v1_cancel_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


