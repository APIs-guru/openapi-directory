# XPSImageSegmentationEvaluationMetrics

Model evaluation metrics for image segmentation problems. Next tag: 4.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_metrics_entries** | [**List[XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry]**](XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry.md) | Metrics that have confidence thresholds. Precision-recall curve can be derived from it. | [optional] 

## Example

```python
from openapi_client.models.xps_image_segmentation_evaluation_metrics import XPSImageSegmentationEvaluationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageSegmentationEvaluationMetrics from a JSON string
xps_image_segmentation_evaluation_metrics_instance = XPSImageSegmentationEvaluationMetrics.from_json(json)
# print the JSON string representation of the object
print(XPSImageSegmentationEvaluationMetrics.to_json())

# convert the object into a dict
xps_image_segmentation_evaluation_metrics_dict = xps_image_segmentation_evaluation_metrics_instance.to_dict()
# create an instance of XPSImageSegmentationEvaluationMetrics from a dict
xps_image_segmentation_evaluation_metrics_from_dict = XPSImageSegmentationEvaluationMetrics.from_dict(xps_image_segmentation_evaluation_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


