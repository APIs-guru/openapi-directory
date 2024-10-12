# ResponsePolicyGKECluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_cluster_name** | **str** | The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/*/locations/*/clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#responsePolicyGKECluster']

## Example

```python
from openapi_client.models.response_policy_gke_cluster import ResponsePolicyGKECluster

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePolicyGKECluster from a JSON string
response_policy_gke_cluster_instance = ResponsePolicyGKECluster.from_json(json)
# print the JSON string representation of the object
print(ResponsePolicyGKECluster.to_json())

# convert the object into a dict
response_policy_gke_cluster_dict = response_policy_gke_cluster_instance.to_dict()
# create an instance of ResponsePolicyGKECluster from a dict
response_policy_gke_cluster_from_dict = ResponsePolicyGKECluster.from_dict(response_policy_gke_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


