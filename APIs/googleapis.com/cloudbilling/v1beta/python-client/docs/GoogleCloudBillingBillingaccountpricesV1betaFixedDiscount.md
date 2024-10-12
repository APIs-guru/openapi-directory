# GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount

Encapsulates a discount off the list price, anchored to the list price as of a fixed time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | [**Decimal**](Decimal.md) |  | [optional] 
**discount_scope_type** | **str** | Type of the fixed discount scope which indicates the source of the discount. It can have values such as &#39;unspecified&#39; and &#39;sku-group&#39;. | [optional] 
**fix_time** | **str** | Time that the fixed discount is anchored to. | [optional] 
**sku_group** | **str** | SKU group where the fixed discount comes from. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_fixed_discount import GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount from a JSON string
google_cloud_billing_billingaccountprices_v1beta_fixed_discount_instance = GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_fixed_discount_dict = google_cloud_billing_billingaccountprices_v1beta_fixed_discount_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount from a dict
google_cloud_billing_billingaccountprices_v1beta_fixed_discount_from_dict = GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount.from_dict(google_cloud_billing_billingaccountprices_v1beta_fixed_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


