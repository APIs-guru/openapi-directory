# TablesAnnotation

Contains annotation details specific to Tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_score** | **float** | Output only. Stores the prediction score for the baseline example, which is defined as the example with all values set to their baseline values. This is used as part of the Sampled Shapley explanation of the model&#39;s prediction. This field is populated only when feature importance is requested. For regression models, this holds the baseline prediction for the baseline example. For classification models, this holds the baseline prediction for the baseline example for the argmax class. | [optional] 
**prediction_interval** | [**DoubleRange**](DoubleRange.md) |  | [optional] 
**score** | **float** | Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher value means greater confidence in the returned value. For target_column_spec of FLOAT64 data type the score is not populated. | [optional] 
**tables_model_column_info** | [**List[TablesModelColumnInfo]**](TablesModelColumnInfo.md) | Output only. Auxiliary information for each of the model&#39;s input_feature_column_specs with respect to this particular prediction. If no other fields than column_spec_name and column_display_name would be populated, then this whole field is not. | [optional] 
**value** | **object** | The predicted value of the row&#39;s target_column. The value depends on the column&#39;s DataType: * CATEGORY - the predicted (with the above confidence &#x60;score&#x60;) CATEGORY value. * FLOAT64 - the predicted (with above &#x60;prediction_interval&#x60;) FLOAT64 value. | [optional] 

## Example

```python
from openapi_client.models.tables_annotation import TablesAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of TablesAnnotation from a JSON string
tables_annotation_instance = TablesAnnotation.from_json(json)
# print the JSON string representation of the object
print(TablesAnnotation.to_json())

# convert the object into a dict
tables_annotation_dict = tables_annotation_instance.to_dict()
# create an instance of TablesAnnotation from a dict
tables_annotation_from_dict = TablesAnnotation.from_dict(tables_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


