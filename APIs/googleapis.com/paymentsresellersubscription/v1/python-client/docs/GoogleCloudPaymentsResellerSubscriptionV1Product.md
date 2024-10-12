# GoogleCloudPaymentsResellerSubscriptionV1Product

A Product resource that defines a subscription service that can be resold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_details** | [**ProductBundleDetails**](ProductBundleDetails.md) |  | [optional] 
**finite_billing_cycle_details** | [**GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails**](GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails.md) |  | [optional] 
**name** | **str** | Identifier. Response only. Resource name of the product. It will have the format of \&quot;partners/{partner_id}/products/{product_id}\&quot; | [optional] 
**price_configs** | [**List[GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig]**](GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig.md) | Output only. Price configs for the product in the available regions. | [optional] [readonly] 
**product_type** | **str** | Output only. Output Only. Specifies the type of the product. | [optional] [readonly] 
**region_codes** | **List[str]** | Output only. 2-letter ISO region code where the product is available in. Ex. \&quot;US\&quot; Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 | [optional] [readonly] 
**subscription_billing_cycle_duration** | [**GoogleCloudPaymentsResellerSubscriptionV1Duration**](GoogleCloudPaymentsResellerSubscriptionV1Duration.md) |  | [optional] 
**titles** | [**List[GoogleTypeLocalizedText]**](GoogleTypeLocalizedText.md) | Output only. Localized human readable name of the product. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_product import GoogleCloudPaymentsResellerSubscriptionV1Product

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Product from a JSON string
google_cloud_payments_reseller_subscription_v1_product_instance = GoogleCloudPaymentsResellerSubscriptionV1Product.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1Product.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_product_dict = google_cloud_payments_reseller_subscription_v1_product_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1Product from a dict
google_cloud_payments_reseller_subscription_v1_product_from_dict = GoogleCloudPaymentsResellerSubscriptionV1Product.from_dict(google_cloud_payments_reseller_subscription_v1_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


