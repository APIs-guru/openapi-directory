# XPSTablesModelColumnInfo

An information specific to given column and Tables Model, in context of the Model and the predictions created by it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_id** | **int** | The ID of the column. | [optional] 
**feature_importance** | **float** | When given as part of a Model: Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict or Batch Predict: Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_model_column_info import XPSTablesModelColumnInfo

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesModelColumnInfo from a JSON string
xps_tables_model_column_info_instance = XPSTablesModelColumnInfo.from_json(json)
# print the JSON string representation of the object
print(XPSTablesModelColumnInfo.to_json())

# convert the object into a dict
xps_tables_model_column_info_dict = xps_tables_model_column_info_instance.to_dict()
# create an instance of XPSTablesModelColumnInfo from a dict
xps_tables_model_column_info_from_dict = XPSTablesModelColumnInfo.from_dict(xps_tables_model_column_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


