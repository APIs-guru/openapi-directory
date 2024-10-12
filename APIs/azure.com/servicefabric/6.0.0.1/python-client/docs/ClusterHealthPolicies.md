# ClusterHealthPolicies

Health policies to evaluate cluster health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy_map** | [**List[ApplicationHealthPolicyMapItem]**](ApplicationHealthPolicyMapItem.md) | Defines a map that contains specific application health policies for different applications. Each entry specifies as key the application name and as value an ApplicationHealthPolicy used to evaluate the application health. If an application is not specified in the map, the application health evaluation uses the ApplicationHealthPolicy found in its application manifest or the default application health policy (if no health policy is defined in the manifest). The map is empty by default.  | [optional] 
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_policies import ClusterHealthPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthPolicies from a JSON string
cluster_health_policies_instance = ClusterHealthPolicies.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthPolicies.to_json())

# convert the object into a dict
cluster_health_policies_dict = cluster_health_policies_instance.to_dict()
# create an instance of ClusterHealthPolicies from a dict
cluster_health_policies_from_dict = ClusterHealthPolicies.from_dict(cluster_health_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


