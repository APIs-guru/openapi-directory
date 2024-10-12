# GoogleCloudBillingSkugroupskusV1betaProductTaxonomy

Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomy_categories** | [**List[GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory]**](GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory.md) | All product categories that the SKU group SKU belongs to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_skugroupskus_v1beta_product_taxonomy import GoogleCloudBillingSkugroupskusV1betaProductTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingSkugroupskusV1betaProductTaxonomy from a JSON string
google_cloud_billing_skugroupskus_v1beta_product_taxonomy_instance = GoogleCloudBillingSkugroupskusV1betaProductTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingSkugroupskusV1betaProductTaxonomy.to_json())

# convert the object into a dict
google_cloud_billing_skugroupskus_v1beta_product_taxonomy_dict = google_cloud_billing_skugroupskus_v1beta_product_taxonomy_instance.to_dict()
# create an instance of GoogleCloudBillingSkugroupskusV1betaProductTaxonomy from a dict
google_cloud_billing_skugroupskus_v1beta_product_taxonomy_from_dict = GoogleCloudBillingSkugroupskusV1betaProductTaxonomy.from_dict(google_cloud_billing_skugroupskus_v1beta_product_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


