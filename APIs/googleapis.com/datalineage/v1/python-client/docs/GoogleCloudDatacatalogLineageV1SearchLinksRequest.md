# GoogleCloudDatacatalogLineageV1SearchLinksRequest

Request message for SearchLinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100. | [optional] 
**page_token** | **str** | Optional. The page token received from a previous &#x60;SearchLinksRequest&#x60; call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. | [optional] 
**source** | [**GoogleCloudDatacatalogLineageV1EntityReference**](GoogleCloudDatacatalogLineageV1EntityReference.md) |  | [optional] 
**target** | [**GoogleCloudDatacatalogLineageV1EntityReference**](GoogleCloudDatacatalogLineageV1EntityReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_search_links_request import GoogleCloudDatacatalogLineageV1SearchLinksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1SearchLinksRequest from a JSON string
google_cloud_datacatalog_lineage_v1_search_links_request_instance = GoogleCloudDatacatalogLineageV1SearchLinksRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1SearchLinksRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_search_links_request_dict = google_cloud_datacatalog_lineage_v1_search_links_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1SearchLinksRequest from a dict
google_cloud_datacatalog_lineage_v1_search_links_request_from_dict = GoogleCloudDatacatalogLineageV1SearchLinksRequest.from_dict(google_cloud_datacatalog_lineage_v1_search_links_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


