# GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy

Category represents catalog item category hierarchy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_catalog_item_category_hierarchy import GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy from a JSON string
google_cloud_recommendationengine_v1beta1_catalog_item_category_hierarchy_instance = GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_catalog_item_category_hierarchy_dict = google_cloud_recommendationengine_v1beta1_catalog_item_category_hierarchy_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy from a dict
google_cloud_recommendationengine_v1beta1_catalog_item_category_hierarchy_from_dict = GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy.from_dict(google_cloud_recommendationengine_v1beta1_catalog_item_category_hierarchy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


