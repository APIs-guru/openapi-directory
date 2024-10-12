# GoogleCloudAssetV1Access

An IAM role or permission under analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_state** | [**IamPolicyAnalysisState**](IamPolicyAnalysisState.md) |  | [optional] 
**permission** | **str** | The permission. | [optional] 
**role** | **str** | The role. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_access import GoogleCloudAssetV1Access

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1Access from a JSON string
google_cloud_asset_v1_access_instance = GoogleCloudAssetV1Access.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1Access.to_json())

# convert the object into a dict
google_cloud_asset_v1_access_dict = google_cloud_asset_v1_access_instance.to_dict()
# create an instance of GoogleCloudAssetV1Access from a dict
google_cloud_asset_v1_access_from_dict = GoogleCloudAssetV1Access.from_dict(google_cloud_asset_v1_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


