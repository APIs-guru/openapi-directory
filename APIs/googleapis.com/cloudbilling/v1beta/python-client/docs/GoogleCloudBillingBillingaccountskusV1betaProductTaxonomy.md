# GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy

Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomy_categories** | [**List[GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory]**](GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory.md) | All product categories that the billing account SKU belong to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskus_v1beta_product_taxonomy import GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy from a JSON string
google_cloud_billing_billingaccountskus_v1beta_product_taxonomy_instance = GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskus_v1beta_product_taxonomy_dict = google_cloud_billing_billingaccountskus_v1beta_product_taxonomy_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy from a dict
google_cloud_billing_billingaccountskus_v1beta_product_taxonomy_from_dict = GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy.from_dict(google_cloud_billing_billingaccountskus_v1beta_product_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


