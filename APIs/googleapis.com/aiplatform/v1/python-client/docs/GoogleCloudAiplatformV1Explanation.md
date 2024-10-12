# GoogleCloudAiplatformV1Explanation

Explanation of a prediction (provided in PredictResponse.predictions) produced by the Model on a given instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributions** | [**List[GoogleCloudAiplatformV1Attribution]**](GoogleCloudAiplatformV1Attribution.md) | Output only. Feature attributions grouped by predicted outputs. For Models that predict only one output, such as regression Models that predict only one score, there is only one attibution that explains the predicted output. For Models that predict multiple outputs, such as multiclass Models that predict multiple classes, each element explains one specific item. Attribution.output_index can be used to identify which output this attribution is explaining. By default, we provide Shapley values for the predicted class. However, you can configure the explanation request to generate Shapley values for any other classes too. For example, if a model predicts a probability of &#x60;0.4&#x60; for approving a loan application, the model&#39;s decision is to reject the application since &#x60;p(reject) &#x3D; 0.6 &gt; p(approve) &#x3D; 0.4&#x60;, and the default Shapley values would be computed for rejection decision and not approval, even though the latter might be the positive class. If users set ExplanationParameters.top_k, the attributions are sorted by instance_output_value in descending order. If ExplanationParameters.output_indices is specified, the attributions are stored by Attribution.output_index in the same order as they appear in the output_indices. | [optional] [readonly] 
**neighbors** | [**List[GoogleCloudAiplatformV1Neighbor]**](GoogleCloudAiplatformV1Neighbor.md) | Output only. List of the nearest neighbors for example-based explanations. For models deployed with the examples explanations feature enabled, the attributions field is empty and instead the neighbors field is populated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_explanation import GoogleCloudAiplatformV1Explanation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Explanation from a JSON string
google_cloud_aiplatform_v1_explanation_instance = GoogleCloudAiplatformV1Explanation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Explanation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_explanation_dict = google_cloud_aiplatform_v1_explanation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Explanation from a dict
google_cloud_aiplatform_v1_explanation_from_dict = GoogleCloudAiplatformV1Explanation.from_dict(google_cloud_aiplatform_v1_explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


