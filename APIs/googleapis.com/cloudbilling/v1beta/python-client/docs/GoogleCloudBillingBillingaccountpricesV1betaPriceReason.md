# GoogleCloudBillingBillingaccountpricesV1betaPriceReason

Encapsulates a price reason which contains background information about the origin of the price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_price** | **object** | Encapsulates a default price which is the current list price. | [optional] 
**fixed_discount** | [**GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount**](GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount.md) |  | [optional] 
**fixed_price** | **object** | Encapsulates a set fixed price applicable during the terms of a contract agreement. | [optional] 
**floating_discount** | [**GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount**](GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount.md) |  | [optional] 
**list_price_as_ceiling** | **object** | Encapsulates a contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice. | [optional] 
**merged_price** | **object** | Encapsulates a price after merging from multiple sources. With merged tiers, each individual tier can be from a different source with different discount types. | [optional] 
**migrated_price** | [**GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice**](GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice.md) |  | [optional] 
**type** | **str** | Type of the price reason. It can have values such as &#39;unspecified&#39;, &#39;default-price&#39;, &#39;fixed-price&#39;, &#39;fixed-discount&#39;, &#39;floating-discount&#39;, &#39;migrated-price&#39;, &#39;merged-price&#39;, &#39;list-price-as-ceiling&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_price_reason import GoogleCloudBillingBillingaccountpricesV1betaPriceReason

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaPriceReason from a JSON string
google_cloud_billing_billingaccountprices_v1beta_price_reason_instance = GoogleCloudBillingBillingaccountpricesV1betaPriceReason.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaPriceReason.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_price_reason_dict = google_cloud_billing_billingaccountprices_v1beta_price_reason_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaPriceReason from a dict
google_cloud_billing_billingaccountprices_v1beta_price_reason_from_dict = GoogleCloudBillingBillingaccountpricesV1betaPriceReason.from_dict(google_cloud_billing_billingaccountprices_v1beta_price_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


