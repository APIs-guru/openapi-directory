# GoogleCloudAiplatformV1Study

A message representing a Study.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time at which the study was created. | [optional] [readonly] 
**display_name** | **str** | Required. Describes the Study, default value is empty string. | [optional] 
**inactive_reason** | **str** | Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED. | [optional] [readonly] 
**name** | **str** | Output only. The name of a study. The study&#39;s globally unique identifier. Format: &#x60;projects/{project}/locations/{location}/studies/{study}&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of a Study. | [optional] [readonly] 
**study_spec** | [**GoogleCloudAiplatformV1StudySpec**](GoogleCloudAiplatformV1StudySpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study import GoogleCloudAiplatformV1Study

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Study from a JSON string
google_cloud_aiplatform_v1_study_instance = GoogleCloudAiplatformV1Study.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Study.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_dict = google_cloud_aiplatform_v1_study_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Study from a dict
google_cloud_aiplatform_v1_study_from_dict = GoogleCloudAiplatformV1Study.from_dict(google_cloud_aiplatform_v1_study_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


