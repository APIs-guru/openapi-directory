# GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation

This message is a wrapper grouping Concurrent Explanations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanations** | [**List[GoogleCloudAiplatformV1beta1Explanation]**](GoogleCloudAiplatformV1beta1Explanation.md) | The explanations of the Model&#39;s PredictResponse.predictions. It has the same number of elements as instances to be explained. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_explain_response_concurrent_explanation import GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation from a JSON string
google_cloud_aiplatform_v1beta1_explain_response_concurrent_explanation_instance = GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_explain_response_concurrent_explanation_dict = google_cloud_aiplatform_v1beta1_explain_response_concurrent_explanation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation from a dict
google_cloud_aiplatform_v1beta1_explain_response_concurrent_explanation_from_dict = GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation.from_dict(google_cloud_aiplatform_v1beta1_explain_response_concurrent_explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


