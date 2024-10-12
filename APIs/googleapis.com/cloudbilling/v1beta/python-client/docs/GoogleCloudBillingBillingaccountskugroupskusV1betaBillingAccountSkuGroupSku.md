# GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku

Encapsulates a SKU that is part of a billing account SKU group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_service** | **str** | BillingAccountService that the BillingAccountSkuGroupSku belongs to. | [optional] 
**display_name** | **str** | Description of the BillingAccountSkuGroupSku. Example: \&quot;A2 Instance Core running in Hong Kong\&quot;. | [optional] 
**geo_taxonomy** | [**GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy**](GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy.md) |  | [optional] 
**name** | **str** | Resource name for the BillingAccountSkuGroupSku. Example: \&quot;billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE\&quot;. | [optional] 
**product_taxonomy** | [**GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy**](GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy.md) |  | [optional] 
**sku_id** | **str** | Unique identifier for the SKU. It is the string after the collection identifier \&quot;skus/\&quot; Example: \&quot;AA95-CD31-42FE\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskugroupskus_v1beta_billing_account_sku_group_sku import GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku from a JSON string
google_cloud_billing_billingaccountskugroupskus_v1beta_billing_account_sku_group_sku_instance = GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskugroupskus_v1beta_billing_account_sku_group_sku_dict = google_cloud_billing_billingaccountskugroupskus_v1beta_billing_account_sku_group_sku_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku from a dict
google_cloud_billing_billingaccountskugroupskus_v1beta_billing_account_sku_group_sku_from_dict = GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku.from_dict(google_cloud_billing_billingaccountskugroupskus_v1beta_billing_account_sku_group_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


