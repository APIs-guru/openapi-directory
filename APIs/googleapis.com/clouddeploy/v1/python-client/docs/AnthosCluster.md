# AnthosCluster

Information specifying an Anthos Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership** | **str** | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is &#x60;projects/{project}/locations/{location}/memberships/{membership_name}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.anthos_cluster import AnthosCluster

# TODO update the JSON string below
json = "{}"
# create an instance of AnthosCluster from a JSON string
anthos_cluster_instance = AnthosCluster.from_json(json)
# print the JSON string representation of the object
print(AnthosCluster.to_json())

# convert the object into a dict
anthos_cluster_dict = anthos_cluster_instance.to_dict()
# create an instance of AnthosCluster from a dict
anthos_cluster_from_dict = AnthosCluster.from_dict(anthos_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


