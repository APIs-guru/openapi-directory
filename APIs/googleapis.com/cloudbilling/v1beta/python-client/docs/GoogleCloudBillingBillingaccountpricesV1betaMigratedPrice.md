# GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice

Encapsulates a price migrated from other SKUs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_sku** | **str** | Source SKU where the discount is migrated from. Format: billingAccounts/{billing_account}/skus/{sku} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_migrated_price import GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice from a JSON string
google_cloud_billing_billingaccountprices_v1beta_migrated_price_instance = GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_migrated_price_dict = google_cloud_billing_billingaccountprices_v1beta_migrated_price_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice from a dict
google_cloud_billing_billingaccountprices_v1beta_migrated_price_from_dict = GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice.from_dict(google_cloud_billing_billingaccountprices_v1beta_migrated_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


