# GoogleCloudAssetV1p4beta1AnalysisState

Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | The human-readable description of the cause of failure. | [optional] 
**code** | **str** | The Google standard error code that best describes the state. For example: - OK means the analysis on this entity has been successfully finished; - PERMISSION_DENIED means an access denied error is encountered; - DEADLINE_EXCEEDED means the analysis on this entity hasn&#39;t been started in time; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p4beta1_analysis_state import GoogleCloudAssetV1p4beta1AnalysisState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p4beta1AnalysisState from a JSON string
google_cloud_asset_v1p4beta1_analysis_state_instance = GoogleCloudAssetV1p4beta1AnalysisState.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p4beta1AnalysisState.to_json())

# convert the object into a dict
google_cloud_asset_v1p4beta1_analysis_state_dict = google_cloud_asset_v1p4beta1_analysis_state_instance.to_dict()
# create an instance of GoogleCloudAssetV1p4beta1AnalysisState from a dict
google_cloud_asset_v1p4beta1_analysis_state_from_dict = GoogleCloudAssetV1p4beta1AnalysisState.from_dict(google_cloud_asset_v1p4beta1_analysis_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


