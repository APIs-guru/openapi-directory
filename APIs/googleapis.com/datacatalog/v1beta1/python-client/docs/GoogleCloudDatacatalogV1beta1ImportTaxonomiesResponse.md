# GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse

Response message for ImportTaxonomies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomies** | [**List[GoogleCloudDatacatalogV1beta1Taxonomy]**](GoogleCloudDatacatalogV1beta1Taxonomy.md) | Taxonomies that were imported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_import_taxonomies_response import GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse from a JSON string
google_cloud_datacatalog_v1beta1_import_taxonomies_response_instance = GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_import_taxonomies_response_dict = google_cloud_datacatalog_v1beta1_import_taxonomies_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse from a dict
google_cloud_datacatalog_v1beta1_import_taxonomies_response_from_dict = GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse.from_dict(google_cloud_datacatalog_v1beta1_import_taxonomies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


