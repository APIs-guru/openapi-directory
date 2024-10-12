# GoogleCloudRetailV2alphaModel

Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp the Recommendation Model was created at. | [optional] [readonly] 
**data_state** | **str** | Output only. The state of data requirements for this model: &#x60;DATA_OK&#x60; and &#x60;DATA_ERROR&#x60;. Recommendation model cannot be trained if the data is in &#x60;DATA_ERROR&#x60; state. Recommendation model can have &#x60;DATA_ERROR&#x60; state even if serving state is &#x60;ACTIVE&#x60;: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. | [optional] 
**filtering_option** | **str** | Optional. If &#x60;RECOMMENDATIONS_FILTERING_ENABLED&#x60;, recommendation filtering by attributes is enabled for the model. | [optional] 
**last_tune_time** | **str** | Output only. The timestamp when the latest successful tune finished. | [optional] [readonly] 
**model_features_config** | [**GoogleCloudRetailV2alphaModelModelFeaturesConfig**](GoogleCloudRetailV2alphaModelModelFeaturesConfig.md) |  | [optional] 
**name** | **str** | Required. The fully qualified resource name of the model. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}&#x60; catalog_id has char limit of 50. recommendation_model_id has char limit of 40. | [optional] 
**optimization_objective** | **str** | Optional. The optimization objective e.g. &#x60;cvr&#x60;. Currently supported values: &#x60;ctr&#x60;, &#x60;cvr&#x60;, &#x60;revenue-per-order&#x60;. If not specified, we choose default based on model type. Default depends on type of recommendation: &#x60;recommended-for-you&#x60; &#x3D;&gt; &#x60;ctr&#x60; &#x60;others-you-may-like&#x60; &#x3D;&gt; &#x60;ctr&#x60; &#x60;frequently-bought-together&#x60; &#x3D;&gt; &#x60;revenue_per_order&#x60; This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type &#x3D; &#x60;frequently-bought-together&#x60; and optimization_objective &#x3D; &#x60;ctr&#x60;), you receive an error 400 if you try to create/update a recommendation with this set of knobs. | [optional] 
**page_optimization_config** | [**GoogleCloudRetailV2alphaModelPageOptimizationConfig**](GoogleCloudRetailV2alphaModelPageOptimizationConfig.md) |  | [optional] 
**periodic_tuning_state** | **str** | Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the &#x60;TuneModel&#x60; method. Default value is &#x60;PERIODIC_TUNING_ENABLED&#x60;. | [optional] 
**serving_config_lists** | [**List[GoogleCloudRetailV2alphaModelServingConfigList]**](GoogleCloudRetailV2alphaModelServingConfigList.md) | Output only. The list of valid serving configs associated with the PageOptimizationConfig. | [optional] [readonly] 
**serving_state** | **str** | Output only. The serving state of the model: &#x60;ACTIVE&#x60;, &#x60;NOT_ACTIVE&#x60;. | [optional] [readonly] 
**training_state** | **str** | Optional. The training state that the model is in (e.g. &#x60;TRAINING&#x60; or &#x60;PAUSED&#x60;). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for &#x60;CreateModel&#x60; method is &#x60;TRAINING&#x60;. The default value for &#x60;UpdateModel&#x60; method is to keep the state the same as before. | [optional] 
**tuning_operation** | **str** | Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. | [optional] [readonly] 
**type** | **str** | Required. The type of model e.g. &#x60;home-page&#x60;. Currently supported values: &#x60;recommended-for-you&#x60;, &#x60;others-you-may-like&#x60;, &#x60;frequently-bought-together&#x60;, &#x60;page-optimization&#x60;, &#x60;similar-items&#x60;, &#x60;buy-it-again&#x60;, &#x60;on-sale-items&#x60;, and &#x60;recently-viewed&#x60;(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type &#x3D; &#x60;frequently-bought-together&#x60; and optimization_objective &#x3D; &#x60;ctr&#x60;), you receive an error 400 if you try to create/update a recommendation with this set of knobs. | [optional] 
**update_time** | **str** | Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_model import GoogleCloudRetailV2alphaModel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaModel from a JSON string
google_cloud_retail_v2alpha_model_instance = GoogleCloudRetailV2alphaModel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaModel.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_model_dict = google_cloud_retail_v2alpha_model_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaModel from a dict
google_cloud_retail_v2alpha_model_from_dict = GoogleCloudRetailV2alphaModel.from_dict(google_cloud_retail_v2alpha_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


