# ManagementCluster

Management cluster configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. The user-provided identifier of the new &#x60;Cluster&#x60;. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5) | [optional] 
**node_type_configs** | [**Dict[str, NodeTypeConfig]**](NodeTypeConfig.md) | Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the &#x60;NodeType&#x60;). | [optional] 
**stretched_cluster_config** | [**StretchedClusterConfig**](StretchedClusterConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_cluster import ManagementCluster

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementCluster from a JSON string
management_cluster_instance = ManagementCluster.from_json(json)
# print the JSON string representation of the object
print(ManagementCluster.to_json())

# convert the object into a dict
management_cluster_dict = management_cluster_instance.to_dict()
# create an instance of ManagementCluster from a dict
management_cluster_from_dict = ManagementCluster.from_dict(management_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


