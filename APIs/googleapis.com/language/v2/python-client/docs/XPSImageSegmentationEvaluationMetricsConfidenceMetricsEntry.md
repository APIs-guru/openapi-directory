# XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry

Metrics for a single confidence threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | The confidence threshold value used to compute the metrics. | [optional] 
**confusion_matrix** | [**XPSConfusionMatrix**](XPSConfusionMatrix.md) |  | [optional] 
**dice_score_coefficient** | **float** | DSC or the F1 score: The harmonic mean of recall and precision. | [optional] 
**iou_score** | **float** | IOU score. | [optional] 
**precision** | **float** | Precision for the given confidence threshold. | [optional] 
**recall** | **float** | Recall for the given confidence threshold. | [optional] 

## Example

```python
from openapi_client.models.xps_image_segmentation_evaluation_metrics_confidence_metrics_entry import XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry from a JSON string
xps_image_segmentation_evaluation_metrics_confidence_metrics_entry_instance = XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry.from_json(json)
# print the JSON string representation of the object
print(XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry.to_json())

# convert the object into a dict
xps_image_segmentation_evaluation_metrics_confidence_metrics_entry_dict = xps_image_segmentation_evaluation_metrics_confidence_metrics_entry_instance.to_dict()
# create an instance of XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry from a dict
xps_image_segmentation_evaluation_metrics_confidence_metrics_entry_from_dict = XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry.from_dict(xps_image_segmentation_evaluation_metrics_confidence_metrics_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


