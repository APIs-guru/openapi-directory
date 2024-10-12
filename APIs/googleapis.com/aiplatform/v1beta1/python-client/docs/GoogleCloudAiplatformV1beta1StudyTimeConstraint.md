# GoogleCloudAiplatformV1beta1StudyTimeConstraint

Time-based Constraint for Study

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Compares the wallclock time to this time. Must use UTC timezone. | [optional] 
**max_duration** | **str** | Counts the wallclock time passed since the creation of this Study. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_study_time_constraint import GoogleCloudAiplatformV1beta1StudyTimeConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StudyTimeConstraint from a JSON string
google_cloud_aiplatform_v1beta1_study_time_constraint_instance = GoogleCloudAiplatformV1beta1StudyTimeConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StudyTimeConstraint.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_study_time_constraint_dict = google_cloud_aiplatform_v1beta1_study_time_constraint_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StudyTimeConstraint from a dict
google_cloud_aiplatform_v1beta1_study_time_constraint_from_dict = GoogleCloudAiplatformV1beta1StudyTimeConstraint.from_dict(google_cloud_aiplatform_v1beta1_study_time_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


