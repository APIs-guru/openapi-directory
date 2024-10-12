# GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku

Encapsulates a stock keeping unit (SKU) visible to a billing account. A SKU distinctly identifies a resource that you can purchase, such as `Nvidia Tesla K80 GPU attached to Spot Preemptible VMs running in Warsaw`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_service** | **str** | BillingAccountService that the BillingAccountSku belongs to. | [optional] 
**display_name** | **str** | Description of the BillingAccountSku. Example: \&quot;A2 Instance Core running in Hong Kong\&quot;. | [optional] 
**geo_taxonomy** | [**GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy**](GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy.md) |  | [optional] 
**name** | **str** | Resource name for the BillingAccountSku. Example: \&quot;billingAccounts/012345-567890-ABCDEF/skus/AA95-CD31-42FE\&quot;. | [optional] 
**product_taxonomy** | [**GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy**](GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy.md) |  | [optional] 
**sku_id** | **str** | Unique identifier for the SKU. It is the string after the collection identifier \&quot;skus/\&quot; Example: \&quot;AA95-CD31-42FE\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskus_v1beta_billing_account_sku import GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku from a JSON string
google_cloud_billing_billingaccountskus_v1beta_billing_account_sku_instance = GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskus_v1beta_billing_account_sku_dict = google_cloud_billing_billingaccountskus_v1beta_billing_account_sku_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku from a dict
google_cloud_billing_billingaccountskus_v1beta_billing_account_sku_from_dict = GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku.from_dict(google_cloud_billing_billingaccountskus_v1beta_billing_account_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


