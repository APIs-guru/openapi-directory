# GoogleCloudAiplatformV1ModelExplanation

Aggregated explanation metrics for a Model over a set of instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mean_attributions** | [**List[GoogleCloudAiplatformV1Attribution]**](GoogleCloudAiplatformV1Attribution.md) | Output only. Aggregated attributions explaining the Model&#39;s prediction outputs over the set of instances. The attributions are grouped by outputs. For Models that predict only one output, such as regression Models that predict only one score, there is only one attibution that explains the predicted output. For Models that predict multiple outputs, such as multiclass Models that predict multiple classes, each element explains one specific item. Attribution.output_index can be used to identify which output this attribution is explaining. The baselineOutputValue, instanceOutputValue and featureAttributions fields are averaged over the test data. NOTE: Currently AutoML tabular classification Models produce only one attribution, which averages attributions over all the classes it predicts. Attribution.approximation_error is not populated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_explanation import GoogleCloudAiplatformV1ModelExplanation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelExplanation from a JSON string
google_cloud_aiplatform_v1_model_explanation_instance = GoogleCloudAiplatformV1ModelExplanation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelExplanation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_explanation_dict = google_cloud_aiplatform_v1_model_explanation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelExplanation from a dict
google_cloud_aiplatform_v1_model_explanation_from_dict = GoogleCloudAiplatformV1ModelExplanation.from_dict(google_cloud_aiplatform_v1_model_explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


