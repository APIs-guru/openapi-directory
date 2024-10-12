# Instance

A Memorystore for Memcached instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_network** | **str** | The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the &#x60;default&#x60; network will be used. | [optional] 
**create_time** | **str** | Output only. The time the instance was created. | [optional] [readonly] 
**discovery_endpoint** | **str** | Output only. Endpoint for the Discovery API. | [optional] [readonly] 
**display_name** | **str** | User provided name for the instance, which is only used for display purposes. Cannot be more than 80 characters. | [optional] 
**instance_messages** | [**List[InstanceMessage]**](InstanceMessage.md) | List of messages that describe the current state of the Memcached instance. | [optional] 
**labels** | **Dict[str, str]** | Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**maintenance_policy** | [**GoogleCloudMemcacheV1beta2MaintenancePolicy**](GoogleCloudMemcacheV1beta2MaintenancePolicy.md) |  | [optional] 
**maintenance_schedule** | [**MaintenanceSchedule**](MaintenanceSchedule.md) |  | [optional] 
**memcache_full_version** | **str** | Output only. The full version of memcached server running on this instance. System automatically determines the full memcached version for an instance based on the input MemcacheVersion. The full version format will be \&quot;memcached-1.5.16\&quot;. | [optional] [readonly] 
**memcache_nodes** | [**List[Node]**](Node.md) | Output only. List of Memcached nodes. Refer to Node message for more details. | [optional] [readonly] 
**memcache_version** | **str** | The major version of Memcached software. If not provided, latest supported version will be used. Currently the latest supported major version is &#x60;MEMCACHE_1_5&#x60;. The minor version will be automatically determined by our system based on the latest supported minor version. | [optional] 
**name** | **str** | Required. Unique name of the resource in this scope including project and location using the form: &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}&#x60; Note: Memcached instances are managed and addressed at the regional level so &#x60;location_id&#x60; here refers to a Google Cloud region; however, users may choose which zones Memcached nodes should be provisioned in within an instance. Refer to zones field for more details. | [optional] 
**node_config** | [**NodeConfig**](NodeConfig.md) |  | [optional] 
**node_count** | **int** | Required. Number of nodes in the Memcached instance. | [optional] 
**parameters** | [**MemcacheParameters**](MemcacheParameters.md) |  | [optional] 
**reserved_ip_range_id** | **List[str]** | Optional. Contains the id of allocated IP address ranges associated with the private service access connection for example, \&quot;test-default\&quot; associated with IP range 10.0.0.0/29. | [optional] 
**state** | **str** | Output only. The state of this Memcached instance. | [optional] [readonly] 
**update_available** | **bool** | Output only. Returns true if there is an update waiting to be applied | [optional] [readonly] 
**update_time** | **str** | Output only. The time the instance was updated. | [optional] [readonly] 
**zones** | **List[str]** | Zones in which Memcached nodes should be provisioned. Memcached nodes will be equally distributed across these zones. If not provided, the service will by default create nodes in all zones in the region for the instance. | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


