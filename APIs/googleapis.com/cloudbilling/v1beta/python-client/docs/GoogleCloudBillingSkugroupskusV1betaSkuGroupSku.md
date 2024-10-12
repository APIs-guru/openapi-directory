# GoogleCloudBillingSkugroupskusV1betaSkuGroupSku

Encapsulates a publicly listed stock keeping unit (SKU) that is part of a publicly listed SKU group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Description of the SkuGroupSku. Example: \&quot;A2 Instance Core running in Hong Kong\&quot;. | [optional] 
**geo_taxonomy** | [**GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy**](GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy.md) |  | [optional] 
**name** | **str** | Resource name for the SkuGroupSku. Example: \&quot;skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE\&quot;. | [optional] 
**product_taxonomy** | [**GoogleCloudBillingSkugroupskusV1betaProductTaxonomy**](GoogleCloudBillingSkugroupskusV1betaProductTaxonomy.md) |  | [optional] 
**service** | **str** | Service that the SkuGroupSku belongs to. | [optional] 
**sku_id** | **str** | Unique identifier for the SKU. It is the string after the collection identifier \&quot;skus/\&quot; Example: \&quot;AA95-CD31-42FE\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_skugroupskus_v1beta_sku_group_sku import GoogleCloudBillingSkugroupskusV1betaSkuGroupSku

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingSkugroupskusV1betaSkuGroupSku from a JSON string
google_cloud_billing_skugroupskus_v1beta_sku_group_sku_instance = GoogleCloudBillingSkugroupskusV1betaSkuGroupSku.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingSkugroupskusV1betaSkuGroupSku.to_json())

# convert the object into a dict
google_cloud_billing_skugroupskus_v1beta_sku_group_sku_dict = google_cloud_billing_skugroupskus_v1beta_sku_group_sku_instance.to_dict()
# create an instance of GoogleCloudBillingSkugroupskusV1betaSkuGroupSku from a dict
google_cloud_billing_skugroupskus_v1beta_sku_group_sku_from_dict = GoogleCloudBillingSkugroupskusV1betaSkuGroupSku.from_dict(google_cloud_billing_skugroupskus_v1beta_sku_group_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


