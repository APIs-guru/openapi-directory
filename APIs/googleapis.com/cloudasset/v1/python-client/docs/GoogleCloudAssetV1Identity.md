# GoogleCloudAssetV1Identity

An identity under analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_state** | [**IamPolicyAnalysisState**](IamPolicyAnalysisState.md) |  | [optional] 
**name** | **str** | The identity of members, formatted as appear in an [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). For example, they might be formatted like the following: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_identity import GoogleCloudAssetV1Identity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1Identity from a JSON string
google_cloud_asset_v1_identity_instance = GoogleCloudAssetV1Identity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1Identity.to_json())

# convert the object into a dict
google_cloud_asset_v1_identity_dict = google_cloud_asset_v1_identity_instance.to_dict()
# create an instance of GoogleCloudAssetV1Identity from a dict
google_cloud_asset_v1_identity_from_dict = GoogleCloudAssetV1Identity.from_dict(google_cloud_asset_v1_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


