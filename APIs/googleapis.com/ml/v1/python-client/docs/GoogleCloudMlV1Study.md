# GoogleCloudMlV1Study

A message representing a Study.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time at which the study was created. | [optional] [readonly] 
**inactive_reason** | **str** | Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED. | [optional] [readonly] 
**name** | **str** | Output only. The name of a study. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of a study. | [optional] [readonly] 
**study_config** | [**GoogleCloudMlV1StudyConfig**](GoogleCloudMlV1StudyConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study import GoogleCloudMlV1Study

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Study from a JSON string
google_cloud_ml_v1_study_instance = GoogleCloudMlV1Study.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Study.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_dict = google_cloud_ml_v1_study_instance.to_dict()
# create an instance of GoogleCloudMlV1Study from a dict
google_cloud_ml_v1_study_from_dict = GoogleCloudMlV1Study.from_dict(google_cloud_ml_v1_study_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


