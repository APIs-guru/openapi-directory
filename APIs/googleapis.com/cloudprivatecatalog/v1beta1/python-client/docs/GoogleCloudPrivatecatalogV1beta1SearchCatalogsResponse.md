# GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse

Response message for PrivateCatalog.SearchCatalogs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[GoogleCloudPrivatecatalogV1beta1Catalog]**](GoogleCloudPrivatecatalogV1beta1Catalog.md) | The &#x60;Catalog&#x60;s computed from the resource context. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to SearchCatalogs that indicates from where listing should continue. This field is optional. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalog_v1beta1_search_catalogs_response import GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse from a JSON string
google_cloud_privatecatalog_v1beta1_search_catalogs_response_instance = GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse.to_json())

# convert the object into a dict
google_cloud_privatecatalog_v1beta1_search_catalogs_response_dict = google_cloud_privatecatalog_v1beta1_search_catalogs_response_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse from a dict
google_cloud_privatecatalog_v1beta1_search_catalogs_response_from_dict = GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse.from_dict(google_cloud_privatecatalog_v1beta1_search_catalogs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


