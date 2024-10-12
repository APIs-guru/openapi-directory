# SetNetworkPolicyRequest

SetNetworkPolicyRequest enables/disables network policy for a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field. | [optional] 
**name** | **str** | The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**network_policy** | [**NetworkPolicy**](NetworkPolicy.md) |  | [optional] 
**project_id** | **str** | Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field. | [optional] 
**zone** | **str** | Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field. | [optional] 

## Example

```python
from openapi_client.models.set_network_policy_request import SetNetworkPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetNetworkPolicyRequest from a JSON string
set_network_policy_request_instance = SetNetworkPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(SetNetworkPolicyRequest.to_json())

# convert the object into a dict
set_network_policy_request_dict = set_network_policy_request_instance.to_dict()
# create an instance of SetNetworkPolicyRequest from a dict
set_network_policy_request_from_dict = SetNetworkPolicyRequest.from_dict(set_network_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


