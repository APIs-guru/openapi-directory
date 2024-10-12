# GoogleCloudDatacatalogV1SearchCatalogRequest

Request message for SearchCatalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_search** | **bool** | Optional. If set, use searchAll permission granted on organizations from &#x60;include_org_ids&#x60; and projects from &#x60;include_project_ids&#x60; instead of the fine grained per resource permissions when filtering the search results. The only allowed &#x60;order_by&#x60; criteria for admin_search mode is &#x60;default&#x60;. Using this flags guarantees a full recall of the search results. | [optional] 
**order_by** | **str** | Specifies the order of results. Currently supported case-sensitive values are: * &#x60;relevance&#x60; that can only be descending * &#x60;last_modified_timestamp [asc|desc]&#x60; with descending (&#x60;desc&#x60;) as default * &#x60;default&#x60; that can only be descending Search queries don&#39;t guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. If you are experiencing recall issues and you don&#39;t have to fetch the results in any specific order, consider setting this parameter to &#x60;default&#x60;. If this parameter is omitted, it defaults to the descending &#x60;relevance&#x60;. | [optional] 
**page_size** | **int** | Upper bound on the number of results you can get in a single response. Can&#39;t be negative or 0, defaults to 10 in this case. The maximum number is 1000. If exceeded, throws an \&quot;invalid argument\&quot; exception. | [optional] 
**page_token** | **str** | Optional. Pagination token that, if specified, returns the next page of search results. If empty, returns the first page. This token is returned in the SearchCatalogResponse.next_page_token field of the response to a previous SearchCatalogRequest call. | [optional] 
**query** | **str** | Optional. The query string with a minimum of 3 characters and specific syntax. For more information, see [Data Catalog search syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference). An empty query string returns all data assets (in the specified scope) that you have access to. A query string can be a simple &#x60;xyz&#x60; or qualified by predicates: * &#x60;name:x&#x60; * &#x60;column:y&#x60; * &#x60;description:z&#x60; | [optional] 
**scope** | [**GoogleCloudDatacatalogV1SearchCatalogRequestScope**](GoogleCloudDatacatalogV1SearchCatalogRequestScope.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_search_catalog_request import GoogleCloudDatacatalogV1SearchCatalogRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SearchCatalogRequest from a JSON string
google_cloud_datacatalog_v1_search_catalog_request_instance = GoogleCloudDatacatalogV1SearchCatalogRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SearchCatalogRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_search_catalog_request_dict = google_cloud_datacatalog_v1_search_catalog_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SearchCatalogRequest from a dict
google_cloud_datacatalog_v1_search_catalog_request_from_dict = GoogleCloudDatacatalogV1SearchCatalogRequest.from_dict(google_cloud_datacatalog_v1_search_catalog_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


