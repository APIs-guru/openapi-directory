# GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails

Describes the details of a cancelled or cancelling subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Output only. The reason of the cancellation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription_cancellation_details import GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails from a JSON string
google_cloud_payments_reseller_subscription_v1_subscription_cancellation_details_instance = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_subscription_cancellation_details_dict = google_cloud_payments_reseller_subscription_v1_subscription_cancellation_details_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails from a dict
google_cloud_payments_reseller_subscription_v1_subscription_cancellation_details_from_dict = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails.from_dict(google_cloud_payments_reseller_subscription_v1_subscription_cancellation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


