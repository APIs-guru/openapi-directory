# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_experiments** | **List[str]** | Additional experiment flags for the time series forcasting training. | [optional] 
**available_at_forecast_columns** | **List[str]** | Names of columns that are available and provided when a forecast is requested. These columns contain information for the given entity (identified by the time_series_identifier_column column) that is known at forecast. For example, predicted weather for a specific day. | [optional] 
**context_window** | **str** | The amount of time into the past training and prediction data is used for model training and prediction respectively. Expressed in number of units defined by the &#x60;data_granularity&#x60; field. | [optional] 
**data_granularity** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputsGranularity**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputsGranularity.md) |  | [optional] 
**enable_probabilistic_inference** | **bool** | If probabilistic inference is enabled, the model will fit a distribution that captures the uncertainty of a prediction. At inference time, the predictive distribution is used to make a point prediction that minimizes the optimization objective. For example, the mean of a predictive distribution is the point prediction that minimizes RMSE loss. If quantiles are specified, then the quantiles of the distribution are also returned. The optimization objective cannot be minimize-quantile-loss. | [optional] 
**export_evaluated_data_items_config** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig.md) |  | [optional] 
**forecast_horizon** | **str** | The amount of time into the future for which forecasted values for the target are returned. Expressed in number of units defined by the &#x60;data_granularity&#x60; field. | [optional] 
**hierarchy_config** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionHierarchyConfig.md) |  | [optional] 
**holiday_regions** | **List[str]** | The geographical region based on which the holiday effect is applied in modeling by adding holiday categorical array feature that include all holidays matching the date. This option only allowed when data_granularity is day. By default, holiday effect modeling is disabled. To turn it on, specify the holiday region using this option. | [optional] 
**optimization_objective** | **str** | Objective function the model is optimizing towards. The training process creates a model that optimizes the value of the objective function over the validation set. The supported optimization objectives: * \&quot;minimize-rmse\&quot; (default) - Minimize root-mean-squared error (RMSE). * \&quot;minimize-mae\&quot; - Minimize mean-absolute error (MAE). * \&quot;minimize-rmsle\&quot; - Minimize root-mean-squared log error (RMSLE). * \&quot;minimize-rmspe\&quot; - Minimize root-mean-squared percentage error (RMSPE). * \&quot;minimize-wape-mae\&quot; - Minimize the combination of weighted absolute percentage error (WAPE) and mean-absolute-error (MAE). * \&quot;minimize-quantile-loss\&quot; - Minimize the quantile loss at the quantiles defined in &#x60;quantiles&#x60;. * \&quot;minimize-mape\&quot; - Minimize the mean absolute percentage error. | [optional] 
**quantiles** | **List[float]** | Quantiles to use for minimize-quantile-loss &#x60;optimization_objective&#x60;, or for probabilistic inference. Up to 5 quantiles are allowed of values between 0 and 1, exclusive. Required if the value of optimization_objective is minimize-quantile-loss. Represents the percent quantiles to use for that objective. Quantiles must be unique. | [optional] 
**target_column** | **str** | The name of the column that the Model is to predict values for. This column must be unavailable at forecast. | [optional] 
**time_column** | **str** | The name of the column that identifies time order in the time series. This column must be available at forecast. | [optional] 
**time_series_attribute_columns** | **List[str]** | Column names that should be used as attribute columns. The value of these columns does not vary as a function of time. For example, store ID or item color. | [optional] 
**time_series_identifier_column** | **str** | The name of the column that identifies the time series. | [optional] 
**train_budget_milli_node_hours** | **str** | Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend&#39;s discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won&#39;t be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive. | [optional] 
**transformations** | [**List[GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformation]**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputsTransformation.md) | Each transformation will apply transform function to given input column. And the result will be used for training. When creating transformation for BigQuery Struct column, the column should be flattened using \&quot;.\&quot; as the delimiter. | [optional] 
**unavailable_at_forecast_columns** | **List[str]** | Names of columns that are unavailable when a forecast is requested. This column contains information for the given entity (identified by the time_series_identifier_column) that is unknown before the forecast For example, actual weather on a given day. | [optional] 
**validation_options** | **str** | Validation options for the data validation component. The available options are: * \&quot;fail-pipeline\&quot; - default, will validate against the validation and fail the pipeline if it fails. * \&quot;ignore-validation\&quot; - ignore the results of the validation and continue | [optional] 
**weight_column** | **str** | Column name that should be used as the weight column. Higher values in this column give more importance to the row during model training. The column must have numeric values between 0 and 10000 inclusively; 0 means the row is ignored for training. If weight column field is not set, then all rows are assumed to have equal weight of 1. | [optional] 
**window_config** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_forecasting_inputs import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_forecasting_inputs_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_forecasting_inputs_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_forecasting_inputs_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_forecasting_inputs_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlForecastingInputs.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_forecasting_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


