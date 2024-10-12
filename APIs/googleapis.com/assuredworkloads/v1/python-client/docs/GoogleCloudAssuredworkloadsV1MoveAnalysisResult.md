# GoogleCloudAssuredworkloadsV1MoveAnalysisResult

Represents the successful move analysis results for a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockers** | [**List[GoogleCloudAssuredworkloadsV1MoveImpact]**](GoogleCloudAssuredworkloadsV1MoveImpact.md) | List of blockers. If not resolved, these will result in compliance violations in the target. | [optional] 
**warnings** | [**List[GoogleCloudAssuredworkloadsV1MoveImpact]**](GoogleCloudAssuredworkloadsV1MoveImpact.md) | List of warnings. These are risks that may or may not result in compliance violations. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_move_analysis_result import GoogleCloudAssuredworkloadsV1MoveAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1MoveAnalysisResult from a JSON string
google_cloud_assuredworkloads_v1_move_analysis_result_instance = GoogleCloudAssuredworkloadsV1MoveAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1MoveAnalysisResult.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_move_analysis_result_dict = google_cloud_assuredworkloads_v1_move_analysis_result_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1MoveAnalysisResult from a dict
google_cloud_assuredworkloads_v1_move_analysis_result_from_dict = GoogleCloudAssuredworkloadsV1MoveAnalysisResult.from_dict(google_cloud_assuredworkloads_v1_move_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


