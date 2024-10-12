# GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice

Definition of a slice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Output only. The dimension of the slice. Well-known dimensions are: * &#x60;annotationSpec&#x60;: This slice is on the test data that has either ground truth or prediction with AnnotationSpec.display_name equals to value. * &#x60;slice&#x60;: This slice is a user customized slice defined by its SliceSpec. | [optional] [readonly] 
**slice_spec** | [**GoogleCloudAiplatformV1beta1ModelEvaluationSliceSliceSliceSpec**](GoogleCloudAiplatformV1beta1ModelEvaluationSliceSliceSliceSpec.md) |  | [optional] 
**value** | **str** | Output only. The value of the dimension in this slice. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_evaluation_slice_slice import GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice from a JSON string
google_cloud_aiplatform_v1beta1_model_evaluation_slice_slice_instance = GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_evaluation_slice_slice_dict = google_cloud_aiplatform_v1beta1_model_evaluation_slice_slice_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice from a dict
google_cloud_aiplatform_v1beta1_model_evaluation_slice_slice_from_dict = GoogleCloudAiplatformV1beta1ModelEvaluationSliceSlice.from_dict(google_cloud_aiplatform_v1beta1_model_evaluation_slice_slice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


