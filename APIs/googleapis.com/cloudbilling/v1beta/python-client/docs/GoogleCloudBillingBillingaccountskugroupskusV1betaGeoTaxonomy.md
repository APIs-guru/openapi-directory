# GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy

Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_metadata** | **object** | Encapsulates a global geographic taxonomy. | [optional] 
**multi_regional_metadata** | [**GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional**](GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional.md) |  | [optional] 
**regional_metadata** | [**GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional**](GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional.md) |  | [optional] 
**type** | **str** | Type of geographic taxonomy associated with the billing account SKU group SKU. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskugroupskus_v1beta_geo_taxonomy import GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy from a JSON string
google_cloud_billing_billingaccountskugroupskus_v1beta_geo_taxonomy_instance = GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskugroupskus_v1beta_geo_taxonomy_dict = google_cloud_billing_billingaccountskugroupskus_v1beta_geo_taxonomy_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy from a dict
google_cloud_billing_billingaccountskugroupskus_v1beta_geo_taxonomy_from_dict = GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy.from_dict(google_cloud_billing_billingaccountskugroupskus_v1beta_geo_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


