# GoogleCloudDatacatalogV1SearchCatalogResponse

Response message for SearchCatalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token that can be used in subsequent calls to retrieve the next page of results. | [optional] 
**results** | [**List[GoogleCloudDatacatalogV1SearchCatalogResult]**](GoogleCloudDatacatalogV1SearchCatalogResult.md) | Search results. | [optional] 
**total_size** | **int** | The approximate total number of entries matched by the query. | [optional] 
**unreachable** | **List[str]** | Unreachable locations. Search results don&#39;t include data from those locations. To get additional information on an error, repeat the search request and restrict it to specific locations by setting the &#x60;SearchCatalogRequest.scope.restricted_locations&#x60; parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_search_catalog_response import GoogleCloudDatacatalogV1SearchCatalogResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SearchCatalogResponse from a JSON string
google_cloud_datacatalog_v1_search_catalog_response_instance = GoogleCloudDatacatalogV1SearchCatalogResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SearchCatalogResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_search_catalog_response_dict = google_cloud_datacatalog_v1_search_catalog_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SearchCatalogResponse from a dict
google_cloud_datacatalog_v1_search_catalog_response_from_dict = GoogleCloudDatacatalogV1SearchCatalogResponse.from_dict(google_cloud_datacatalog_v1_search_catalog_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


