# GoogleCloudDatalabelingV1beta1PrCurve


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**area_under_curve** | **float** | Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve. | [optional] 
**confidence_metrics_entries** | [**List[GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry]**](GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry.md) | Entries that make up the precision-recall graph. Each entry is a \&quot;point\&quot; on the graph drawn for a different &#x60;confidence_threshold&#x60;. | [optional] 
**mean_average_precision** | **float** | Mean average prcision of this curve. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_pr_curve import GoogleCloudDatalabelingV1beta1PrCurve

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1PrCurve from a JSON string
google_cloud_datalabeling_v1beta1_pr_curve_instance = GoogleCloudDatalabelingV1beta1PrCurve.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1PrCurve.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_pr_curve_dict = google_cloud_datalabeling_v1beta1_pr_curve_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1PrCurve from a dict
google_cloud_datalabeling_v1beta1_pr_curve_from_dict = GoogleCloudDatalabelingV1beta1PrCurve.from_dict(google_cloud_datalabeling_v1beta1_pr_curve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


