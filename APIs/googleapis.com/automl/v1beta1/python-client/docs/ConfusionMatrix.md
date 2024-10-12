# ConfusionMatrix

Confusion matrix of the model running the classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **List[str]** | Output only. IDs of the annotation specs used in the confusion matrix. For Tables CLASSIFICATION prediction_type only list of annotation_spec_display_name-s is populated. | [optional] 
**display_name** | **List[str]** | Output only. Display name of the annotation specs used in the confusion matrix, as they were at the moment of the evaluation. For Tables CLASSIFICATION prediction_type-s, distinct values of the target column at the moment of the model evaluation are populated here. | [optional] 
**row** | [**List[ClassificationEvaluationMetricsConfusionMatrixRow]**](ClassificationEvaluationMetricsConfusionMatrixRow.md) | Output only. Rows in the confusion matrix. The number of rows is equal to the size of &#x60;annotation_spec_id&#x60;. &#x60;row[i].example_count[j]&#x60; is the number of examples that have ground truth of the &#x60;annotation_spec_id[i]&#x60; and are predicted as &#x60;annotation_spec_id[j]&#x60; by the model being evaluated. | [optional] 

## Example

```python
from openapi_client.models.confusion_matrix import ConfusionMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of ConfusionMatrix from a JSON string
confusion_matrix_instance = ConfusionMatrix.from_json(json)
# print the JSON string representation of the object
print(ConfusionMatrix.to_json())

# convert the object into a dict
confusion_matrix_dict = confusion_matrix_instance.to_dict()
# create an instance of ConfusionMatrix from a dict
confusion_matrix_from_dict = ConfusionMatrix.from_dict(confusion_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


