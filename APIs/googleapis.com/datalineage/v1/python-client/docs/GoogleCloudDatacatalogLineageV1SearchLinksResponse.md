# GoogleCloudDatacatalogLineageV1SearchLinksResponse

Response message for SearchLinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**List[GoogleCloudDatacatalogLineageV1Link]**](GoogleCloudDatacatalogLineageV1Link.md) | The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target). | [optional] 
**next_page_token** | **str** | The token to specify as &#x60;page_token&#x60; in the subsequent call to get the next page. Omitted if there are no more pages in the response. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_search_links_response import GoogleCloudDatacatalogLineageV1SearchLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1SearchLinksResponse from a JSON string
google_cloud_datacatalog_lineage_v1_search_links_response_instance = GoogleCloudDatacatalogLineageV1SearchLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1SearchLinksResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_search_links_response_dict = google_cloud_datacatalog_lineage_v1_search_links_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1SearchLinksResponse from a dict
google_cloud_datacatalog_lineage_v1_search_links_response_from_dict = GoogleCloudDatacatalogLineageV1SearchLinksResponse.from_dict(google_cloud_datacatalog_lineage_v1_search_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


