# GoogleCloudRetailV2alphaModelPageOptimizationConfig

The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configs to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_optimization_event_type** | **str** | Required. The type of UserEvent this page optimization is shown for. Each page has an associated event type - this will be the corresponding event type for the page that the page optimization model is used on. Supported types: * &#x60;add-to-cart&#x60;: Products being added to cart. * &#x60;detail-page-view&#x60;: Products detail page viewed. * &#x60;home-page-view&#x60;: Homepage viewed * &#x60;category-page-view&#x60;: Homepage viewed * &#x60;shopping-cart-page-view&#x60;: User viewing a shopping cart. &#x60;home-page-view&#x60; only allows models with type &#x60;recommended-for-you&#x60;. All other page_optimization_event_type allow all Model.types. | [optional] 
**panels** | [**List[GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel]**](GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.md) | Required. A list of panel configurations. Limit &#x3D; 5. | [optional] 
**restriction** | **str** | Optional. How to restrict results across panels e.g. can the same ServingConfig be shown on multiple panels at once. If unspecified, default to &#x60;UNIQUE_MODEL_RESTRICTION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_model_page_optimization_config import GoogleCloudRetailV2alphaModelPageOptimizationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaModelPageOptimizationConfig from a JSON string
google_cloud_retail_v2alpha_model_page_optimization_config_instance = GoogleCloudRetailV2alphaModelPageOptimizationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaModelPageOptimizationConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_model_page_optimization_config_dict = google_cloud_retail_v2alpha_model_page_optimization_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaModelPageOptimizationConfig from a dict
google_cloud_retail_v2alpha_model_page_optimization_config_from_dict = GoogleCloudRetailV2alphaModelPageOptimizationConfig.from_dict(google_cloud_retail_v2alpha_model_page_optimization_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


