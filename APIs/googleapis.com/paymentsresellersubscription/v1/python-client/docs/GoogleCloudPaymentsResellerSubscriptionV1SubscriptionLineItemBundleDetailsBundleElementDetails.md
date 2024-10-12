# GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails

The details for an element in the hard bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | **str** | Output only. Product resource name that identifies the bundle element. The format is &#39;partners/{partner_id}/products/{product_id}&#39;. | [optional] [readonly] 
**user_account_linked_time** | **str** | Output only. The time when this product is linked to an end user. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_subscription_line_item_bundle_details_bundle_element_details import GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails from a JSON string
google_cloud_payments_reseller_subscription_v1_subscription_line_item_bundle_details_bundle_element_details_instance = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_subscription_line_item_bundle_details_bundle_element_details_dict = google_cloud_payments_reseller_subscription_v1_subscription_line_item_bundle_details_bundle_element_details_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails from a dict
google_cloud_payments_reseller_subscription_v1_subscription_line_item_bundle_details_bundle_element_details_from_dict = GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails.from_dict(google_cloud_payments_reseller_subscription_v1_subscription_line_item_bundle_details_bundle_element_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


