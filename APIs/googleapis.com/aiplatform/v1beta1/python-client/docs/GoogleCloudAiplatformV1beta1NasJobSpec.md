# GoogleCloudAiplatformV1beta1NasJobSpec

Represents the spec of a NasJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_trial_algorithm_spec** | [**GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpec**](GoogleCloudAiplatformV1beta1NasJobSpecMultiTrialAlgorithmSpec.md) |  | [optional] 
**resume_nas_job_id** | **str** | The ID of the existing NasJob in the same Project and Location which will be used to resume search. search_space_spec and nas_algorithm_spec are obtained from previous NasJob hence should not provide them again for this NasJob. | [optional] 
**search_space_spec** | **str** | It defines the search space for Neural Architecture Search (NAS). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nas_job_spec import GoogleCloudAiplatformV1beta1NasJobSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NasJobSpec from a JSON string
google_cloud_aiplatform_v1beta1_nas_job_spec_instance = GoogleCloudAiplatformV1beta1NasJobSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NasJobSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nas_job_spec_dict = google_cloud_aiplatform_v1beta1_nas_job_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NasJobSpec from a dict
google_cloud_aiplatform_v1beta1_nas_job_spec_from_dict = GoogleCloudAiplatformV1beta1NasJobSpec.from_dict(google_cloud_aiplatform_v1beta1_nas_job_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


