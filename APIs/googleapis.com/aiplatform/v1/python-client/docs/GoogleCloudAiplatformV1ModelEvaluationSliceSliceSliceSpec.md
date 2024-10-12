# GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec

Specification for how the data should be sliced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | [**Dict[str, GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig]**](GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpecSliceConfig.md) | Mapping configuration for this SliceSpec. The key is the name of the feature. By default, the key will be prefixed by \&quot;instance\&quot; as a dictionary prefix for Vertex Batch Predictions output format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec import GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec from a JSON string
google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_instance = GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_dict = google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec from a dict
google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_from_dict = GoogleCloudAiplatformV1ModelEvaluationSliceSliceSliceSpec.from_dict(google_cloud_aiplatform_v1_model_evaluation_slice_slice_slice_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


