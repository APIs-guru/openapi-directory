# XPSEvaluationMetricsSet

Specifies location of model evaluation metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_metrics** | [**List[XPSEvaluationMetrics]**](XPSEvaluationMetrics.md) | Inline EvaluationMetrics - should be relatively small. For passing large quantities of exhaustive metrics, use file_spec. | [optional] 
**file_spec** | [**XPSFileSpec**](XPSFileSpec.md) |  | [optional] 
**num_evaluation_metrics** | **str** | Number of the evaluation metrics (usually one per label plus overall). | [optional] 

## Example

```python
from openapi_client.models.xps_evaluation_metrics_set import XPSEvaluationMetricsSet

# TODO update the JSON string below
json = "{}"
# create an instance of XPSEvaluationMetricsSet from a JSON string
xps_evaluation_metrics_set_instance = XPSEvaluationMetricsSet.from_json(json)
# print the JSON string representation of the object
print(XPSEvaluationMetricsSet.to_json())

# convert the object into a dict
xps_evaluation_metrics_set_dict = xps_evaluation_metrics_set_instance.to_dict()
# create an instance of XPSEvaluationMetricsSet from a dict
xps_evaluation_metrics_set_from_dict = XPSEvaluationMetricsSet.from_dict(xps_evaluation_metrics_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


