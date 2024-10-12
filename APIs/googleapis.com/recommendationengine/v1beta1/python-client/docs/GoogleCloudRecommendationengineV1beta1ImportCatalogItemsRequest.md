# GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest

Request message for Import methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors_config** | [**GoogleCloudRecommendationengineV1beta1ImportErrorsConfig**](GoogleCloudRecommendationengineV1beta1ImportErrorsConfig.md) |  | [optional] 
**input_config** | [**GoogleCloudRecommendationengineV1beta1InputConfig**](GoogleCloudRecommendationengineV1beta1InputConfig.md) |  | [optional] 
**request_id** | **str** | Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. | [optional] 
**update_mask** | **str** | Optional. Indicates which fields in the provided imported &#39;items&#39; to update. If not set, will by default update all fields. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_import_catalog_items_request import GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest from a JSON string
google_cloud_recommendationengine_v1beta1_import_catalog_items_request_instance = GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_import_catalog_items_request_dict = google_cloud_recommendationengine_v1beta1_import_catalog_items_request_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest from a dict
google_cloud_recommendationengine_v1beta1_import_catalog_items_request_from_dict = GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest.from_dict(google_cloud_recommendationengine_v1beta1_import_catalog_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


