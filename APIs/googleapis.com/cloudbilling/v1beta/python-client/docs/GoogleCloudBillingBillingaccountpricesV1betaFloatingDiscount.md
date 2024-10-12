# GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount

Encapsulates a discount off the current list price, not anchored to any list price as of a fixed time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | [**Decimal**](Decimal.md) |  | [optional] 
**discount_scope_type** | **str** | Type of the floating discount scope which indicates the source of the discount. It can have values such as &#39;unspecified&#39; and &#39;sku-group&#39;. | [optional] 
**sku_group** | **str** | SKU group where the floating discount comes from. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_floating_discount import GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount from a JSON string
google_cloud_billing_billingaccountprices_v1beta_floating_discount_instance = GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_floating_discount_dict = google_cloud_billing_billingaccountprices_v1beta_floating_discount_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount from a dict
google_cloud_billing_billingaccountprices_v1beta_floating_discount_from_dict = GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount.from_dict(google_cloud_billing_billingaccountprices_v1beta_floating_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


