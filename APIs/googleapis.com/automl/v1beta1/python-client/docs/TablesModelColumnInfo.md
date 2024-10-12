# TablesModelColumnInfo

An information specific to given column and Tables Model, in context of the Model and the predictions created by it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_display_name** | **str** | Output only. The display name of the column (same as the display_name of its ColumnSpec). | [optional] 
**column_spec_name** | **str** | Output only. The name of the ColumnSpec describing the column. Not populated when this proto is outputted to BigQuery. | [optional] 
**feature_importance** | **float** | Output only. When given as part of a Model (always populated): Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict (populated iff feature_importance param is set) or Batch Predict (populated iff feature_importance param is set): Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method. | [optional] 

## Example

```python
from openapi_client.models.tables_model_column_info import TablesModelColumnInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TablesModelColumnInfo from a JSON string
tables_model_column_info_instance = TablesModelColumnInfo.from_json(json)
# print the JSON string representation of the object
print(TablesModelColumnInfo.to_json())

# convert the object into a dict
tables_model_column_info_dict = tables_model_column_info_instance.to_dict()
# create an instance of TablesModelColumnInfo from a dict
tables_model_column_info_from_dict = TablesModelColumnInfo.from_dict(tables_model_column_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


