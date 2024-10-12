# GoogleCloudAiplatformV1ErrorAnalysisAnnotation

Model error analysis for each annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributed_items** | [**List[GoogleCloudAiplatformV1ErrorAnalysisAnnotationAttributedItem]**](GoogleCloudAiplatformV1ErrorAnalysisAnnotationAttributedItem.md) | Attributed items for a given annotation, typically representing neighbors from the training sets constrained by the query type. | [optional] 
**outlier_score** | **float** | The outlier score of this annotated item. Usually defined as the min of all distances from attributed items. | [optional] 
**outlier_threshold** | **float** | The threshold used to determine if this annotation is an outlier or not. | [optional] 
**query_type** | **str** | The query type used for finding the attributed items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_error_analysis_annotation import GoogleCloudAiplatformV1ErrorAnalysisAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ErrorAnalysisAnnotation from a JSON string
google_cloud_aiplatform_v1_error_analysis_annotation_instance = GoogleCloudAiplatformV1ErrorAnalysisAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ErrorAnalysisAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_error_analysis_annotation_dict = google_cloud_aiplatform_v1_error_analysis_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ErrorAnalysisAnnotation from a dict
google_cloud_aiplatform_v1_error_analysis_annotation_from_dict = GoogleCloudAiplatformV1ErrorAnalysisAnnotation.from_dict(google_cloud_aiplatform_v1_error_analysis_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


