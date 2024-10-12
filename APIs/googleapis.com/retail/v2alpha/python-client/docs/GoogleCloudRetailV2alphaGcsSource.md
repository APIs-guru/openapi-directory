# GoogleCloudRetailV2alphaGcsSource

Google Cloud Storage location for input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_schema** | **str** | The schema to use when parsing the data from the source. Supported values for product imports: * &#x60;product&#x60; (default): One JSON Product per line. Each product must have a valid Product.id. * &#x60;product_merchant_center&#x60;: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * &#x60;user_event&#x60; (default): One JSON UserEvent per line. * &#x60;user_event_ga360&#x60;: Using https://support.google.com/analytics/answer/3437719. Supported values for control imports: * &#x60;control&#x60; (default): One JSON Control per line. Supported values for catalog attribute imports: * &#x60;catalog_attribute&#x60; (default): One CSV CatalogAttribute per line. | [optional] 
**input_uris** | **List[str]** | Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, &#x60;gs://bucket/directory/object.json&#x60;) or a pattern matching one or more files, such as &#x60;gs://bucket/directory/*.json&#x60;. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing product information](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_gcs_source import GoogleCloudRetailV2alphaGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaGcsSource from a JSON string
google_cloud_retail_v2alpha_gcs_source_instance = GoogleCloudRetailV2alphaGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaGcsSource.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_gcs_source_dict = google_cloud_retail_v2alpha_gcs_source_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaGcsSource from a dict
google_cloud_retail_v2alpha_gcs_source_from_dict = GoogleCloudRetailV2alphaGcsSource.from_dict(google_cloud_retail_v2alpha_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


