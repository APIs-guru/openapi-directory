# GoogleCloudDatacatalogV1beta1SearchCatalogResponse

Response message for SearchCatalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token that can be used to retrieve the next page of results. | [optional] 
**results** | [**List[GoogleCloudDatacatalogV1beta1SearchCatalogResult]**](GoogleCloudDatacatalogV1beta1SearchCatalogResult.md) | Search results. | [optional] 
**total_size** | **int** | The approximate total number of entries matched by the query. | [optional] 
**unreachable** | **List[str]** | Unreachable locations. Search result does not include data from those locations. Users can get additional information on the error by repeating the search request with a more restrictive parameter -- setting the value for &#x60;SearchDataCatalogRequest.scope.restricted_locations&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_search_catalog_response import GoogleCloudDatacatalogV1beta1SearchCatalogResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogResponse from a JSON string
google_cloud_datacatalog_v1beta1_search_catalog_response_instance = GoogleCloudDatacatalogV1beta1SearchCatalogResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1SearchCatalogResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_search_catalog_response_dict = google_cloud_datacatalog_v1beta1_search_catalog_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1SearchCatalogResponse from a dict
google_cloud_datacatalog_v1beta1_search_catalog_response_from_dict = GoogleCloudDatacatalogV1beta1SearchCatalogResponse.from_dict(google_cloud_datacatalog_v1beta1_search_catalog_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


