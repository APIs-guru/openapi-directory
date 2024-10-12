# GoogleCloudDatacatalogV1ListTaxonomiesResponse

Response message for ListTaxonomies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token of the next results page. Empty if there are no more results in the list. | [optional] 
**taxonomies** | [**List[GoogleCloudDatacatalogV1Taxonomy]**](GoogleCloudDatacatalogV1Taxonomy.md) | Taxonomies that the project contains. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_list_taxonomies_response import GoogleCloudDatacatalogV1ListTaxonomiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ListTaxonomiesResponse from a JSON string
google_cloud_datacatalog_v1_list_taxonomies_response_instance = GoogleCloudDatacatalogV1ListTaxonomiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ListTaxonomiesResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_list_taxonomies_response_dict = google_cloud_datacatalog_v1_list_taxonomies_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ListTaxonomiesResponse from a dict
google_cloud_datacatalog_v1_list_taxonomies_response_from_dict = GoogleCloudDatacatalogV1ListTaxonomiesResponse.from_dict(google_cloud_datacatalog_v1_list_taxonomies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


