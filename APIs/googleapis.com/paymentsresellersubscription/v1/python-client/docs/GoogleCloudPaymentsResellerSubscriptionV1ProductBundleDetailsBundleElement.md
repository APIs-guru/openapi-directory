# GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement

The individual product that is included in the bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | **str** | Required. Output only. Product resource name that identifies the bundle element. The format is &#39;partners/{partner_id}/products/{product_id}&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_product_bundle_details_bundle_element import GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement from a JSON string
google_cloud_payments_reseller_subscription_v1_product_bundle_details_bundle_element_instance = GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_product_bundle_details_bundle_element_dict = google_cloud_payments_reseller_subscription_v1_product_bundle_details_bundle_element_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement from a dict
google_cloud_payments_reseller_subscription_v1_product_bundle_details_bundle_element_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement.from_dict(google_cloud_payments_reseller_subscription_v1_product_bundle_details_bundle_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


