# GoogleCloudDatacatalogV1ImportTaxonomiesRequest

Request message for ImportTaxonomies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cross_regional_source** | [**GoogleCloudDatacatalogV1CrossRegionalSource**](GoogleCloudDatacatalogV1CrossRegionalSource.md) |  | [optional] 
**inline_source** | [**GoogleCloudDatacatalogV1InlineSource**](GoogleCloudDatacatalogV1InlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_import_taxonomies_request import GoogleCloudDatacatalogV1ImportTaxonomiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ImportTaxonomiesRequest from a JSON string
google_cloud_datacatalog_v1_import_taxonomies_request_instance = GoogleCloudDatacatalogV1ImportTaxonomiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ImportTaxonomiesRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_import_taxonomies_request_dict = google_cloud_datacatalog_v1_import_taxonomies_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ImportTaxonomiesRequest from a dict
google_cloud_datacatalog_v1_import_taxonomies_request_from_dict = GoogleCloudDatacatalogV1ImportTaxonomiesRequest.from_dict(google_cloud_datacatalog_v1_import_taxonomies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


