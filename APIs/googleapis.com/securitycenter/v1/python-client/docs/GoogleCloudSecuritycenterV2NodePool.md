# GoogleCloudSecuritycenterV2NodePool

Provides GKE node pool information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Kubernetes node pool name. | [optional] 
**nodes** | [**List[GoogleCloudSecuritycenterV2Node]**](GoogleCloudSecuritycenterV2Node.md) | Nodes associated with the finding. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_node_pool import GoogleCloudSecuritycenterV2NodePool

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2NodePool from a JSON string
google_cloud_securitycenter_v2_node_pool_instance = GoogleCloudSecuritycenterV2NodePool.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2NodePool.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_node_pool_dict = google_cloud_securitycenter_v2_node_pool_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2NodePool from a dict
google_cloud_securitycenter_v2_node_pool_from_dict = GoogleCloudSecuritycenterV2NodePool.from_dict(google_cloud_securitycenter_v2_node_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


