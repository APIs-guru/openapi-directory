# GoogleCloudAiplatformV1beta1SpecialistPool

SpecialistPool represents customers' own workforce to work on their data labeling jobs. It includes a group of specialist managers and workers. Managers are responsible for managing the workers in this pool as well as customers' data labeling jobs associated with this pool. Customers create specialist pool as well as start data labeling jobs on Cloud, managers and workers handle the jobs using CrowdCompute console.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The user-defined name of the SpecialistPool. The name can be up to 128 characters long and can consist of any UTF-8 characters. This field should be unique on project-level. | [optional] 
**name** | **str** | Required. The resource name of the SpecialistPool. | [optional] 
**pending_data_labeling_jobs** | **List[str]** | Output only. The resource name of the pending data labeling jobs. | [optional] [readonly] 
**specialist_manager_emails** | **List[str]** | The email addresses of the managers in the SpecialistPool. | [optional] 
**specialist_managers_count** | **int** | Output only. The number of managers in this SpecialistPool. | [optional] [readonly] 
**specialist_worker_emails** | **List[str]** | The email addresses of workers in the SpecialistPool. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_specialist_pool import GoogleCloudAiplatformV1beta1SpecialistPool

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SpecialistPool from a JSON string
google_cloud_aiplatform_v1beta1_specialist_pool_instance = GoogleCloudAiplatformV1beta1SpecialistPool.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SpecialistPool.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_specialist_pool_dict = google_cloud_aiplatform_v1beta1_specialist_pool_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SpecialistPool from a dict
google_cloud_aiplatform_v1beta1_specialist_pool_from_dict = GoogleCloudAiplatformV1beta1SpecialistPool.from_dict(google_cloud_aiplatform_v1beta1_specialist_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


