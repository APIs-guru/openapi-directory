# GoogleCloudRecommendationengineV1beta1CatalogItem

CatalogItem captures all metadata information of items to be recommended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_hierarchies** | [**List[GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]**](GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy.md) | Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both [\&quot;Shoes &amp; Accessories\&quot; -&gt; \&quot;Shoes\&quot;] and [\&quot;Sports &amp; Fitness\&quot; -&gt; \&quot;Athletic Clothing\&quot; -&gt; \&quot;Shoes\&quot;], it could be represented as: \&quot;categoryHierarchies\&quot;: [ { \&quot;categories\&quot;: [\&quot;Shoes &amp; Accessories\&quot;, \&quot;Shoes\&quot;]}, { \&quot;categories\&quot;: [\&quot;Sports &amp; Fitness\&quot;, \&quot;Athletic Clothing\&quot;, \&quot;Shoes\&quot;] } ] | [optional] 
**description** | **str** | Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB. | [optional] 
**id** | **str** | Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog. | [optional] 
**item_attributes** | [**GoogleCloudRecommendationengineV1beta1FeatureMap**](GoogleCloudRecommendationengineV1beta1FeatureMap.md) |  | [optional] 
**item_group_id** | **str** | Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id). | [optional] 
**language_code** | **str** | Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance. | [optional] 
**product_metadata** | [**GoogleCloudRecommendationengineV1beta1ProductCatalogItem**](GoogleCloudRecommendationengineV1beta1ProductCatalogItem.md) |  | [optional] 
**tags** | **List[str]** | Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter. | [optional] 
**title** | **str** | Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_catalog_item import GoogleCloudRecommendationengineV1beta1CatalogItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogItem from a JSON string
google_cloud_recommendationengine_v1beta1_catalog_item_instance = GoogleCloudRecommendationengineV1beta1CatalogItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1CatalogItem.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_catalog_item_dict = google_cloud_recommendationengine_v1beta1_catalog_item_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1CatalogItem from a dict
google_cloud_recommendationengine_v1beta1_catalog_item_from_dict = GoogleCloudRecommendationengineV1beta1CatalogItem.from_dict(google_cloud_recommendationengine_v1beta1_catalog_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


