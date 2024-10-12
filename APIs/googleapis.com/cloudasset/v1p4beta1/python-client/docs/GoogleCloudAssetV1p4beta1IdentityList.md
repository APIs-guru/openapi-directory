# GoogleCloudAssetV1p4beta1IdentityList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_edges** | [**List[GoogleCloudAssetV1p4beta1Edge]**](GoogleCloudAssetV1p4beta1Edge.md) | Group identity edges of the graph starting from the binding&#39;s group members to any node of the identities. The Edge.source_node contains a group, such as \&quot;group:parent@google.com\&quot;. The Edge.target_node contains a member of the group, such as \&quot;group:child@google.com\&quot; or \&quot;user:foo@google.com\&quot;. This field is present only if the output_group_edges option is enabled in request. | [optional] 
**identities** | [**List[GoogleCloudAssetV1p4beta1Identity]**](GoogleCloudAssetV1p4beta1Identity.md) | Only the identities that match one of the following conditions will be presented: - The identity_selector, if it is specified in request; - Otherwise, identities reachable from the policy binding&#39;s members. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p4beta1_identity_list import GoogleCloudAssetV1p4beta1IdentityList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p4beta1IdentityList from a JSON string
google_cloud_asset_v1p4beta1_identity_list_instance = GoogleCloudAssetV1p4beta1IdentityList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p4beta1IdentityList.to_json())

# convert the object into a dict
google_cloud_asset_v1p4beta1_identity_list_dict = google_cloud_asset_v1p4beta1_identity_list_instance.to_dict()
# create an instance of GoogleCloudAssetV1p4beta1IdentityList from a dict
google_cloud_asset_v1p4beta1_identity_list_from_dict = GoogleCloudAssetV1p4beta1IdentityList.from_dict(google_cloud_asset_v1p4beta1_identity_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


