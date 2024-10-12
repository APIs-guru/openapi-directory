# Cluster

A cluster instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_mode** | **str** | Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. | [optional] 
**create_time** | **str** | Output only. The timestamp associated with the cluster creation request. | [optional] [readonly] 
**discovery_endpoints** | [**List[DiscoveryEndpoint]**](DiscoveryEndpoint.md) | Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported. | [optional] [readonly] 
**name** | **str** | Required. Unique name of the resource in this scope including project and location using the form: &#x60;projects/{project_id}/locations/{location_id}/clusters/{cluster_id}&#x60; | [optional] 
**psc_configs** | [**List[PscConfig]**](PscConfig.md) | Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported. | [optional] 
**psc_connections** | [**List[PscConnection]**](PscConnection.md) | Output only. PSC connections for discovery of the cluster topology and accessing the cluster. | [optional] [readonly] 
**replica_count** | **int** | Optional. The number of replica nodes per shard. | [optional] 
**shard_count** | **int** | Required. Number of shards for the Redis cluster. | [optional] 
**size_gb** | **int** | Output only. Redis memory size in GB for the entire cluster rounded up to the next integer. | [optional] [readonly] 
**state** | **str** | Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED | [optional] [readonly] 
**state_info** | [**StateInfo**](StateInfo.md) |  | [optional] 
**transit_encryption_mode** | **str** | Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster. | [optional] 
**uid** | **str** | Output only. System assigned, unique identifier for the cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster import Cluster

# TODO update the JSON string below
json = "{}"
# create an instance of Cluster from a JSON string
cluster_instance = Cluster.from_json(json)
# print the JSON string representation of the object
print(Cluster.to_json())

# convert the object into a dict
cluster_dict = cluster_instance.to_dict()
# create an instance of Cluster from a dict
cluster_from_dict = Cluster.from_dict(cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


