# GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest

Request message for CreateEvaluationJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GoogleCloudDatalabelingV1beta1EvaluationJob**](GoogleCloudDatalabelingV1beta1EvaluationJob.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_create_evaluation_job_request import GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest from a JSON string
google_cloud_datalabeling_v1beta1_create_evaluation_job_request_instance = GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_create_evaluation_job_request_dict = google_cloud_datalabeling_v1beta1_create_evaluation_job_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest from a dict
google_cloud_datalabeling_v1beta1_create_evaluation_job_request_from_dict = GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest.from_dict(google_cloud_datalabeling_v1beta1_create_evaluation_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


