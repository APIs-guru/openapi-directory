# GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig

Additional configs for the frequently-bought-together model type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_products_type** | **str** | Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the &#x60;frequently-bought-together&#x60; type. If it isn&#39;t specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_model_frequently_bought_together_features_config import GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig from a JSON string
google_cloud_retail_v2_model_frequently_bought_together_features_config_instance = GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2_model_frequently_bought_together_features_config_dict = google_cloud_retail_v2_model_frequently_bought_together_features_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig from a dict
google_cloud_retail_v2_model_frequently_bought_together_features_config_from_dict = GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig.from_dict(google_cloud_retail_v2_model_frequently_bought_together_features_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


