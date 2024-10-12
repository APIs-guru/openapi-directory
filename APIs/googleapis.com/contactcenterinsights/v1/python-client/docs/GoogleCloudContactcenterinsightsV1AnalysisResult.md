# GoogleCloudContactcenterinsightsV1AnalysisResult

The result of an analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_analysis_metadata** | [**GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata**](GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.md) |  | [optional] 
**end_time** | **str** | The time at which the analysis ended. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_analysis_result import GoogleCloudContactcenterinsightsV1AnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1AnalysisResult from a JSON string
google_cloud_contactcenterinsights_v1_analysis_result_instance = GoogleCloudContactcenterinsightsV1AnalysisResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1AnalysisResult.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_analysis_result_dict = google_cloud_contactcenterinsights_v1_analysis_result_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1AnalysisResult from a dict
google_cloud_contactcenterinsights_v1_analysis_result_from_dict = GoogleCloudContactcenterinsightsV1AnalysisResult.from_dict(google_cloud_contactcenterinsights_v1_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


