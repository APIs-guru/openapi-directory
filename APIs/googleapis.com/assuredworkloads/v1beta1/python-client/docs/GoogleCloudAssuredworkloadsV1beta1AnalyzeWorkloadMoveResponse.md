# GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse

Response containing the analysis results for the hypothetical resource move.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_move_analyses** | [**List[GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis]**](GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis.md) | List of analysis results for each asset in scope. | [optional] 
**next_page_token** | **str** | The next page token. Is empty if the last page is reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response import GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse from a JSON string
google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response_instance = GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response_dict = google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse from a dict
google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response_from_dict = GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse.from_dict(google_cloud_assuredworkloads_v1beta1_analyze_workload_move_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


