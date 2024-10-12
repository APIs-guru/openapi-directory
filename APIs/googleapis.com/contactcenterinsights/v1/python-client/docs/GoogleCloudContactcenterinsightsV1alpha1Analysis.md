# GoogleCloudContactcenterinsightsV1alpha1Analysis

The analysis resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_result** | [**GoogleCloudContactcenterinsightsV1alpha1AnalysisResult**](GoogleCloudContactcenterinsightsV1alpha1AnalysisResult.md) |  | [optional] 
**annotator_selector** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector**](GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which the analysis was created, which occurs when the long-running operation completes. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis} | [optional] 
**request_time** | **str** | Output only. The time at which the analysis was requested. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_analysis import GoogleCloudContactcenterinsightsV1alpha1Analysis

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1Analysis from a JSON string
google_cloud_contactcenterinsights_v1alpha1_analysis_instance = GoogleCloudContactcenterinsightsV1alpha1Analysis.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1Analysis.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_analysis_dict = google_cloud_contactcenterinsights_v1alpha1_analysis_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1Analysis from a dict
google_cloud_contactcenterinsights_v1alpha1_analysis_from_dict = GoogleCloudContactcenterinsightsV1alpha1Analysis.from_dict(google_cloud_contactcenterinsights_v1alpha1_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


