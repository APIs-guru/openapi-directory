# GoogleCloudAiplatformV1EvaluatedAnnotationExplanation

Explanation result of the prediction produced by the Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation** | [**GoogleCloudAiplatformV1Explanation**](GoogleCloudAiplatformV1Explanation.md) |  | [optional] 
**explanation_type** | **str** | Explanation type. For AutoML Image Classification models, possible values are: * &#x60;image-integrated-gradients&#x60; * &#x60;image-xrai&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_evaluated_annotation_explanation import GoogleCloudAiplatformV1EvaluatedAnnotationExplanation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1EvaluatedAnnotationExplanation from a JSON string
google_cloud_aiplatform_v1_evaluated_annotation_explanation_instance = GoogleCloudAiplatformV1EvaluatedAnnotationExplanation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1EvaluatedAnnotationExplanation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_evaluated_annotation_explanation_dict = google_cloud_aiplatform_v1_evaluated_annotation_explanation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1EvaluatedAnnotationExplanation from a dict
google_cloud_aiplatform_v1_evaluated_annotation_explanation_from_dict = GoogleCloudAiplatformV1EvaluatedAnnotationExplanation.from_dict(google_cloud_aiplatform_v1_evaluated_annotation_explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


