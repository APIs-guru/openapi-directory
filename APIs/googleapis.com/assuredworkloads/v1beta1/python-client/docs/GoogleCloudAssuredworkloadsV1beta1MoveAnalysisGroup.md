# GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup

Represents a logical group of checks performed for an asset. If successful, the group contains the analysis result, otherwise it contains an error with the failure reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_result** | [**GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult**](GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult.md) |  | [optional] 
**display_name** | **str** | Name of the analysis group. | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_move_analysis_group import GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup from a JSON string
google_cloud_assuredworkloads_v1beta1_move_analysis_group_instance = GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_move_analysis_group_dict = google_cloud_assuredworkloads_v1beta1_move_analysis_group_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup from a dict
google_cloud_assuredworkloads_v1beta1_move_analysis_group_from_dict = GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup.from_dict(google_cloud_assuredworkloads_v1beta1_move_analysis_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


