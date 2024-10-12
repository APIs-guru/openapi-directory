# TablesModelMetadata

Model metadata specific to AutoML Tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_early_stopping** | **bool** | Use the entire training budget. This disables the early stopping feature. By default, the early stopping feature is enabled, which means that AutoML Tables might stop training before the entire training budget has been used. | [optional] 
**input_feature_column_specs** | [**List[ColumnSpec]**](ColumnSpec.md) | Column specs of the dataset&#39;s primary table&#39;s columns, on which the model is trained and which are used as the input for predictions. The target_column as well as, according to dataset&#39;s state upon model creation, weight_column, and ml_use_column must never be included here. Only 3 fields are used: * name - May be set on CreateModel, if set only the columns specified are used, otherwise all primary table&#39;s columns (except the ones listed above) are used for the training and prediction input. * display_name - Output only. * data_type - Output only. | [optional] 
**optimization_objective** | **str** | Objective function the model is optimizing towards. The training process creates a model that maximizes/minimizes the value of the objective function over the validation set. The supported optimization objectives depend on the prediction type. If the field is not set, a default objective function is used. CLASSIFICATION_BINARY: \&quot;MAXIMIZE_AU_ROC\&quot; (default) - Maximize the area under the receiver operating characteristic (ROC) curve. \&quot;MINIMIZE_LOG_LOSS\&quot; - Minimize log loss. \&quot;MAXIMIZE_AU_PRC\&quot; - Maximize the area under the precision-recall curve. \&quot;MAXIMIZE_PRECISION_AT_RECALL\&quot; - Maximize precision for a specified recall value. \&quot;MAXIMIZE_RECALL_AT_PRECISION\&quot; - Maximize recall for a specified precision value. CLASSIFICATION_MULTI_CLASS : \&quot;MINIMIZE_LOG_LOSS\&quot; (default) - Minimize log loss. REGRESSION: \&quot;MINIMIZE_RMSE\&quot; (default) - Minimize root-mean-squared error (RMSE). \&quot;MINIMIZE_MAE\&quot; - Minimize mean-absolute error (MAE). \&quot;MINIMIZE_RMSLE\&quot; - Minimize root-mean-squared log error (RMSLE). | [optional] 
**optimization_objective_precision_value** | **float** | Required when optimization_objective is \&quot;MAXIMIZE_RECALL_AT_PRECISION\&quot;. Must be between 0 and 1, inclusive. | [optional] 
**optimization_objective_recall_value** | **float** | Required when optimization_objective is \&quot;MAXIMIZE_PRECISION_AT_RECALL\&quot;. Must be between 0 and 1, inclusive. | [optional] 
**tables_model_column_info** | [**List[TablesModelColumnInfo]**](TablesModelColumnInfo.md) | Output only. Auxiliary information for each of the input_feature_column_specs with respect to this particular model. | [optional] 
**target_column_spec** | [**ColumnSpec**](ColumnSpec.md) |  | [optional] 
**train_budget_milli_node_hours** | **str** | Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend&#39;s discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won&#39;t be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive. | [optional] 
**train_cost_milli_node_hours** | **str** | Output only. The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. | [optional] 

## Example

```python
from openapi_client.models.tables_model_metadata import TablesModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TablesModelMetadata from a JSON string
tables_model_metadata_instance = TablesModelMetadata.from_json(json)
# print the JSON string representation of the object
print(TablesModelMetadata.to_json())

# convert the object into a dict
tables_model_metadata_dict = tables_model_metadata_instance.to_dict()
# create an instance of TablesModelMetadata from a dict
tables_model_metadata_from_dict = TablesModelMetadata.from_dict(tables_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


