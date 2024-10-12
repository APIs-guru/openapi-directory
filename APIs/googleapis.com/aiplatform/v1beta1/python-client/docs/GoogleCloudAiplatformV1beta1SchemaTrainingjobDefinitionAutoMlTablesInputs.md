# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_experiments** | **List[str]** | Additional experiment flags for the Tables training pipeline. | [optional] 
**disable_early_stopping** | **bool** | Use the entire training budget. This disables the early stopping feature. By default, the early stopping feature is enabled, which means that AutoML Tables might stop training before the entire training budget has been used. | [optional] 
**export_evaluated_data_items_config** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionExportEvaluatedDataItemsConfig.md) |  | [optional] 
**optimization_objective** | **str** | Objective function the model is optimizing towards. The training process creates a model that maximizes/minimizes the value of the objective function over the validation set. The supported optimization objectives depend on the prediction type. If the field is not set, a default objective function is used. classification (binary): \&quot;maximize-au-roc\&quot; (default) - Maximize the area under the receiver operating characteristic (ROC) curve. \&quot;minimize-log-loss\&quot; - Minimize log loss. \&quot;maximize-au-prc\&quot; - Maximize the area under the precision-recall curve. \&quot;maximize-precision-at-recall\&quot; - Maximize precision for a specified recall value. \&quot;maximize-recall-at-precision\&quot; - Maximize recall for a specified precision value. classification (multi-class): \&quot;minimize-log-loss\&quot; (default) - Minimize log loss. regression: \&quot;minimize-rmse\&quot; (default) - Minimize root-mean-squared error (RMSE). \&quot;minimize-mae\&quot; - Minimize mean-absolute error (MAE). \&quot;minimize-rmsle\&quot; - Minimize root-mean-squared log error (RMSLE). | [optional] 
**optimization_objective_precision_value** | **float** | Required when optimization_objective is \&quot;maximize-recall-at-precision\&quot;. Must be between 0 and 1, inclusive. | [optional] 
**optimization_objective_recall_value** | **float** | Required when optimization_objective is \&quot;maximize-precision-at-recall\&quot;. Must be between 0 and 1, inclusive. | [optional] 
**prediction_type** | **str** | The type of prediction the Model is to produce. \&quot;classification\&quot; - Predict one out of multiple target values is picked for each row. \&quot;regression\&quot; - Predict a value based on its relation to other values. This type is available only to columns that contain semantically numeric values, i.e. integers or floating point number, even if stored as e.g. strings. | [optional] 
**target_column** | **str** | The column name of the target column that the model is to predict. | [optional] 
**train_budget_milli_node_hours** | **str** | Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend&#39;s discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won&#39;t be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive. | [optional] 
**transformations** | [**List[GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation]**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputsTransformation.md) | Each transformation will apply transform function to given input column. And the result will be used for training. When creating transformation for BigQuery Struct column, the column should be flattened using \&quot;.\&quot; as the delimiter. | [optional] 
**weight_column_name** | **str** | Column name that should be used as the weight column. Higher values in this column give more importance to the row during model training. The column must have numeric values between 0 and 10000 inclusively; 0 means the row is ignored for training. If weight column field is not set, then all rows are assumed to have equal weight of 1. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionAutoMlTablesInputs.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_auto_ml_tables_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


