# GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse

Response message for ListCatalogItems method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_items** | [**List[GoogleCloudRecommendationengineV1beta1CatalogItem]**](GoogleCloudRecommendationengineV1beta1CatalogItem.md) | The catalog items. | [optional] 
**next_page_token** | **str** | If empty, the list is complete. If nonempty, the token to pass to the next request&#39;s ListCatalogItemRequest.page_token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_list_catalog_items_response import GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_list_catalog_items_response_instance = GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_list_catalog_items_response_dict = google_cloud_recommendationengine_v1beta1_list_catalog_items_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse from a dict
google_cloud_recommendationengine_v1beta1_list_catalog_items_response_from_dict = GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse.from_dict(google_cloud_recommendationengine_v1beta1_list_catalog_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


