# GoogleCloudDatacatalogV1ExportTaxonomiesResponse

Response message for ExportTaxonomies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomies** | [**List[GoogleCloudDatacatalogV1SerializedTaxonomy]**](GoogleCloudDatacatalogV1SerializedTaxonomy.md) | List of taxonomies and policy tags as nested protocol buffers. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_export_taxonomies_response import GoogleCloudDatacatalogV1ExportTaxonomiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ExportTaxonomiesResponse from a JSON string
google_cloud_datacatalog_v1_export_taxonomies_response_instance = GoogleCloudDatacatalogV1ExportTaxonomiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ExportTaxonomiesResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_export_taxonomies_response_dict = google_cloud_datacatalog_v1_export_taxonomies_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ExportTaxonomiesResponse from a dict
google_cloud_datacatalog_v1_export_taxonomies_response_from_dict = GoogleCloudDatacatalogV1ExportTaxonomiesResponse.from_dict(google_cloud_datacatalog_v1_export_taxonomies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


