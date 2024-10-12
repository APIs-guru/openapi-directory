# GoogleCloudRetailV2ListCatalogsResponse

Response for CatalogService.ListCatalogs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[GoogleCloudRetailV2Catalog]**](GoogleCloudRetailV2Catalog.md) | All the customer&#39;s Catalogs. | [optional] 
**next_page_token** | **str** | A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_list_catalogs_response import GoogleCloudRetailV2ListCatalogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ListCatalogsResponse from a JSON string
google_cloud_retail_v2_list_catalogs_response_instance = GoogleCloudRetailV2ListCatalogsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ListCatalogsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_list_catalogs_response_dict = google_cloud_retail_v2_list_catalogs_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2ListCatalogsResponse from a dict
google_cloud_retail_v2_list_catalogs_response_from_dict = GoogleCloudRetailV2ListCatalogsResponse.from_dict(google_cloud_retail_v2_list_catalogs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


