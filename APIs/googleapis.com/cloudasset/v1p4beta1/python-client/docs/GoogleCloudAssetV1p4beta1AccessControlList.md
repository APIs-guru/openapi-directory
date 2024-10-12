# GoogleCloudAssetV1p4beta1AccessControlList

An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accesses** | [**List[GoogleCloudAssetV1p4beta1Access]**](GoogleCloudAssetV1p4beta1Access.md) | The accesses that match one of the following conditions: - The access_selector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding&#39;s role. | [optional] 
**resource_edges** | [**List[GoogleCloudAssetV1p4beta1Edge]**](GoogleCloudAssetV1p4beta1Edge.md) | Resource edges of the graph starting from the policy attached resource to any descendant resources. The Edge.source_node contains the full resource name of a parent resource and Edge.target_node contains the full resource name of a child resource. This field is present only if the output_resource_edges option is enabled in request. | [optional] 
**resources** | [**List[GoogleCloudAssetV1p4beta1Resource]**](GoogleCloudAssetV1p4beta1Resource.md) | The resources that match one of the following conditions: - The resource_selector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p4beta1_access_control_list import GoogleCloudAssetV1p4beta1AccessControlList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p4beta1AccessControlList from a JSON string
google_cloud_asset_v1p4beta1_access_control_list_instance = GoogleCloudAssetV1p4beta1AccessControlList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p4beta1AccessControlList.to_json())

# convert the object into a dict
google_cloud_asset_v1p4beta1_access_control_list_dict = google_cloud_asset_v1p4beta1_access_control_list_instance.to_dict()
# create an instance of GoogleCloudAssetV1p4beta1AccessControlList from a dict
google_cloud_asset_v1p4beta1_access_control_list_from_dict = GoogleCloudAssetV1p4beta1AccessControlList.from_dict(google_cloud_asset_v1p4beta1_access_control_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


