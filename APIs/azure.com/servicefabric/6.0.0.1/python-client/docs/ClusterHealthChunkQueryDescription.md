# ClusterHealthChunkQueryDescription

The cluster health chunk query description, which can specify the health policies to evaluate cluster health and very expressive filters to select which cluster entities to include in response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_filters** | [**List[ApplicationHealthStateFilter]**](ApplicationHealthStateFilter.md) | Defines a list of filters that specify which applications to be included in the returned cluster health chunk. If no filters are specified, no applications are returned. All the applications are used to evaluate the cluster&#39;s aggregated health state, regardless of the input filters. The cluster health chunk query may specify multiple application filters. For example, it can specify a filter to return all applications with health state Error and another filter to always include applications of a specified application type.  | [optional] 
**application_health_policies** | [**ApplicationHealthPolicies**](ApplicationHealthPolicies.md) |  | [optional] 
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 
**node_filters** | [**List[NodeHealthStateFilter]**](NodeHealthStateFilter.md) | Defines a list of filters that specify which nodes to be included in the returned cluster health chunk. If no filters are specified, no nodes are returned. All the nodes are used to evaluate the cluster&#39;s aggregated health state, regardless of the input filters. The cluster health chunk query may specify multiple node filters. For example, it can specify a filter to return all nodes with health state Error and another filter to always include a node identified by its NodeName.  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_chunk_query_description import ClusterHealthChunkQueryDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthChunkQueryDescription from a JSON string
cluster_health_chunk_query_description_instance = ClusterHealthChunkQueryDescription.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthChunkQueryDescription.to_json())

# convert the object into a dict
cluster_health_chunk_query_description_dict = cluster_health_chunk_query_description_instance.to_dict()
# create an instance of ClusterHealthChunkQueryDescription from a dict
cluster_health_chunk_query_description_from_dict = ClusterHealthChunkQueryDescription.from_dict(cluster_health_chunk_query_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


