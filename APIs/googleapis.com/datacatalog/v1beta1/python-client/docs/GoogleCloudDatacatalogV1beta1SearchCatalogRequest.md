# GoogleCloudDatacatalogV1beta1SearchCatalogRequest

Request message for SearchCatalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_by** | **str** | Specifies the ordering of results, currently supported case-sensitive choices are: * &#x60;relevance&#x60;, only supports descending * &#x60;last_modified_timestamp [asc|desc]&#x60;, defaults to descending if not specified * &#x60;default&#x60; that can only be descending If not specified, defaults to &#x60;relevance&#x60; descending. | [optional] 
**page_size** | **int** | Number of results in the search page. If &lt;&#x3D;0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size &gt; 1000. | [optional] 
**page_token** | **str** | Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned. | [optional] 
**query** | **str** | Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as \&quot;x\&quot; or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information. | [optional] 
**scope** | [**GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope**](GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_search_catalog_request import GoogleCloudDatacatalogV1beta1SearchCatalogRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogRequest from a JSON string
google_cloud_datacatalog_v1beta1_search_catalog_request_instance = GoogleCloudDatacatalogV1beta1SearchCatalogRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1SearchCatalogRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_search_catalog_request_dict = google_cloud_datacatalog_v1beta1_search_catalog_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogRequest from a dict
google_cloud_datacatalog_v1beta1_search_catalog_request_from_dict = GoogleCloudDatacatalogV1beta1SearchCatalogRequest.from_dict(google_cloud_datacatalog_v1beta1_search_catalog_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


