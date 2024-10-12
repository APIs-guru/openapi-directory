# GoogleCloudRecommendationengineV1beta1ListCatalogsResponse

Response for ListCatalogs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogs** | [**List[GoogleCloudRecommendationengineV1beta1Catalog]**](GoogleCloudRecommendationengineV1beta1Catalog.md) | Output only. All the customer&#39;s catalogs. | [optional] [readonly] 
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_list_catalogs_response import GoogleCloudRecommendationengineV1beta1ListCatalogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ListCatalogsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_list_catalogs_response_instance = GoogleCloudRecommendationengineV1beta1ListCatalogsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ListCatalogsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_list_catalogs_response_dict = google_cloud_recommendationengine_v1beta1_list_catalogs_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ListCatalogsResponse from a dict
google_cloud_recommendationengine_v1beta1_list_catalogs_response_from_dict = GoogleCloudRecommendationengineV1beta1ListCatalogsResponse.from_dict(google_cloud_recommendationengine_v1beta1_list_catalogs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


