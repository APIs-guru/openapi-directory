# GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy

Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_metadata** | **object** | Encapsulates a global geographic taxonomy. | [optional] 
**multi_regional_metadata** | [**GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional**](GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional.md) |  | [optional] 
**regional_metadata** | [**GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional**](GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional.md) |  | [optional] 
**type** | **str** | Type of geographic taxonomy associated with the SKU group SKU. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_skugroupskus_v1beta_geo_taxonomy import GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy from a JSON string
google_cloud_billing_skugroupskus_v1beta_geo_taxonomy_instance = GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy.to_json())

# convert the object into a dict
google_cloud_billing_skugroupskus_v1beta_geo_taxonomy_dict = google_cloud_billing_skugroupskus_v1beta_geo_taxonomy_instance.to_dict()
# create an instance of GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy from a dict
google_cloud_billing_skugroupskus_v1beta_geo_taxonomy_from_dict = GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy.from_dict(google_cloud_billing_skugroupskus_v1beta_geo_taxonomy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


