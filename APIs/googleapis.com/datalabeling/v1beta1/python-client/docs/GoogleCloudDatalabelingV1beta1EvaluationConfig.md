# GoogleCloudDatalabelingV1beta1EvaluationConfig

Configuration details used for calculating evaluation metrics and creating an Evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box_evaluation_options** | [**GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions**](GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_evaluation_config import GoogleCloudDatalabelingV1beta1EvaluationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationConfig from a JSON string
google_cloud_datalabeling_v1beta1_evaluation_config_instance = GoogleCloudDatalabelingV1beta1EvaluationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1EvaluationConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_evaluation_config_dict = google_cloud_datalabeling_v1beta1_evaluation_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationConfig from a dict
google_cloud_datalabeling_v1beta1_evaluation_config_from_dict = GoogleCloudDatalabelingV1beta1EvaluationConfig.from_dict(google_cloud_datalabeling_v1beta1_evaluation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


