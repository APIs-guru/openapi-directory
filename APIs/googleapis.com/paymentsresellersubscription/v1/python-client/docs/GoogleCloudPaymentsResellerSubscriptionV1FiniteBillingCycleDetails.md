# GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails

Details for a subscriptiin line item with finite billing cycles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle_count_limit** | **str** | Required. The number of a subscription line item billing cycles after which billing will stop automatically. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_finite_billing_cycle_details import GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails from a JSON string
google_cloud_payments_reseller_subscription_v1_finite_billing_cycle_details_instance = GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_finite_billing_cycle_details_dict = google_cloud_payments_reseller_subscription_v1_finite_billing_cycle_details_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails from a dict
google_cloud_payments_reseller_subscription_v1_finite_billing_cycle_details_from_dict = GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails.from_dict(google_cloud_payments_reseller_subscription_v1_finite_billing_cycle_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


