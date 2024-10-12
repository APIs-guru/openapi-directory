# GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails

Details about the previous subscription that this new subscription upgrades/downgrades from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle_spec** | **str** | Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription. | [optional] 
**previous_subscription_id** | **str** | Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription_upgrade_downgrade_details import GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails from a JSON string
google_cloud_payments_reseller_subscription_v1_subscription_upgrade_downgrade_details_instance = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_subscription_upgrade_downgrade_details_dict = google_cloud_payments_reseller_subscription_v1_subscription_upgrade_downgrade_details_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails from a dict
google_cloud_payments_reseller_subscription_v1_subscription_upgrade_downgrade_details_from_dict = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails.from_dict(google_cloud_payments_reseller_subscription_v1_subscription_upgrade_downgrade_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


