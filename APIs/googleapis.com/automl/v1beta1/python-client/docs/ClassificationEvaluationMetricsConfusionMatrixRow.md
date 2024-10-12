# ClassificationEvaluationMetricsConfusionMatrixRow

Output only. A row in the confusion matrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_count** | **List[int]** | Output only. Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the &#x60;annotation_spec_id&#x60; field or, if that one is not populated, length of the display_name field. | [optional] 

## Example

```python
from openapi_client.models.classification_evaluation_metrics_confusion_matrix_row import ClassificationEvaluationMetricsConfusionMatrixRow

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationEvaluationMetricsConfusionMatrixRow from a JSON string
classification_evaluation_metrics_confusion_matrix_row_instance = ClassificationEvaluationMetricsConfusionMatrixRow.from_json(json)
# print the JSON string representation of the object
print(ClassificationEvaluationMetricsConfusionMatrixRow.to_json())

# convert the object into a dict
classification_evaluation_metrics_confusion_matrix_row_dict = classification_evaluation_metrics_confusion_matrix_row_instance.to_dict()
# create an instance of ClassificationEvaluationMetricsConfusionMatrixRow from a dict
classification_evaluation_metrics_confusion_matrix_row_from_dict = ClassificationEvaluationMetricsConfusionMatrixRow.from_dict(classification_evaluation_metrics_confusion_matrix_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


