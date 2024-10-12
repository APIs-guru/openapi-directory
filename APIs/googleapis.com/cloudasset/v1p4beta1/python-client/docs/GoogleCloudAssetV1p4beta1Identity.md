# GoogleCloudAssetV1p4beta1Identity

An identity under analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_state** | [**GoogleCloudAssetV1p4beta1AnalysisState**](GoogleCloudAssetV1p4beta1AnalysisState.md) |  | [optional] 
**name** | **str** | The identity name in any form of members appear in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding), such as: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers - etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p4beta1_identity import GoogleCloudAssetV1p4beta1Identity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p4beta1Identity from a JSON string
google_cloud_asset_v1p4beta1_identity_instance = GoogleCloudAssetV1p4beta1Identity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p4beta1Identity.to_json())

# convert the object into a dict
google_cloud_asset_v1p4beta1_identity_dict = google_cloud_asset_v1p4beta1_identity_instance.to_dict()
# create an instance of GoogleCloudAssetV1p4beta1Identity from a dict
google_cloud_asset_v1p4beta1_identity_from_dict = GoogleCloudAssetV1p4beta1Identity.from_dict(google_cloud_asset_v1p4beta1_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


