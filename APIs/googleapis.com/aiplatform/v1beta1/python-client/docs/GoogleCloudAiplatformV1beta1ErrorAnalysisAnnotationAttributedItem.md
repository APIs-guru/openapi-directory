# GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem

Attributed items for a given annotation, typically representing neighbors from the training sets constrained by the query type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_resource_name** | **str** | The unique ID for each annotation. Used by FE to allocate the annotation in DB. | [optional] 
**distance** | **float** | The distance of this item to the annotation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_error_analysis_annotation_attributed_item import GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem from a JSON string
google_cloud_aiplatform_v1beta1_error_analysis_annotation_attributed_item_instance = GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_error_analysis_annotation_attributed_item_dict = google_cloud_aiplatform_v1beta1_error_analysis_annotation_attributed_item_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem from a dict
google_cloud_aiplatform_v1beta1_error_analysis_annotation_attributed_item_from_dict = GoogleCloudAiplatformV1beta1ErrorAnalysisAnnotationAttributedItem.from_dict(google_cloud_aiplatform_v1beta1_error_analysis_annotation_attributed_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


