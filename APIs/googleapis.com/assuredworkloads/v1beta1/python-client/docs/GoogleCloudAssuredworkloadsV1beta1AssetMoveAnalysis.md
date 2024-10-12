# GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis

Represents move analysis results for an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_groups** | [**List[GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup]**](GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup.md) | List of eligible analyses performed for the asset. | [optional] 
**asset** | **str** | The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 | [optional] 
**asset_type** | **str** | Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_asset_move_analysis import GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis from a JSON string
google_cloud_assuredworkloads_v1beta1_asset_move_analysis_instance = GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_asset_move_analysis_dict = google_cloud_assuredworkloads_v1beta1_asset_move_analysis_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis from a dict
google_cloud_assuredworkloads_v1beta1_asset_move_analysis_from_dict = GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis.from_dict(google_cloud_assuredworkloads_v1beta1_asset_move_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


