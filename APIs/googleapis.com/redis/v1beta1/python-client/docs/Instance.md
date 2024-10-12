# Instance

A Memorystore for Redis instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_location_id** | **str** | Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service. | [optional] 
**auth_enabled** | **bool** | Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to \&quot;true\&quot; AUTH is enabled on the instance. Default value is \&quot;false\&quot; meaning AUTH is disabled. | [optional] 
**authorized_network** | **str** | Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the &#x60;default&#x60; network will be used. | [optional] 
**available_maintenance_versions** | **List[str]** | Optional. The available maintenance versions that an instance could update to. | [optional] 
**connect_mode** | **str** | Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING. | [optional] 
**create_time** | **str** | Output only. The time the instance was created. | [optional] [readonly] 
**current_location_id** | **str** | Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance. | [optional] [readonly] 
**customer_managed_key** | **str** | Optional. The KMS key reference that the customer provides when trying to create the instance. | [optional] 
**display_name** | **str** | An arbitrary and optional user-provided name for the instance. | [optional] 
**host** | **str** | Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Resource labels to represent user provided metadata | [optional] 
**location_id** | **str** | Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone. | [optional] 
**maintenance_policy** | [**MaintenancePolicy**](MaintenancePolicy.md) |  | [optional] 
**maintenance_schedule** | [**MaintenanceSchedule**](MaintenanceSchedule.md) |  | [optional] 
**maintenance_version** | **str** | Optional. The self service update maintenance version. The version is date based such as \&quot;20210712_00_00\&quot;. | [optional] 
**memory_size_gb** | **int** | Required. Redis memory size in GiB. | [optional] 
**name** | **str** | Required. Unique name of the resource in this scope including project and location using the form: &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}&#x60; Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details. | [optional] 
**nodes** | [**List[NodeInfo]**](NodeInfo.md) | Output only. Info per node. | [optional] [readonly] 
**persistence_config** | [**PersistenceConfig**](PersistenceConfig.md) |  | [optional] 
**persistence_iam_identity** | **str** | Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is \&quot;serviceAccount:\&quot;. The value may change over time for a given instance so should be checked before each import/export operation. | [optional] [readonly] 
**port** | **int** | Output only. The port number of the exposed Redis endpoint. | [optional] [readonly] 
**read_endpoint** | **str** | Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target &#39;host&#39;. | [optional] [readonly] 
**read_endpoint_port** | **int** | Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target &#39;port&#39;. | [optional] [readonly] 
**read_replicas_mode** | **str** | Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED. | [optional] 
**redis_configs** | **Dict[str, str]** | Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries | [optional] 
**redis_version** | **str** | Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * &#x60;REDIS_3_2&#x60; for Redis 3.2 compatibility * &#x60;REDIS_4_0&#x60; for Redis 4.0 compatibility (default) * &#x60;REDIS_5_0&#x60; for Redis 5.0 compatibility * &#x60;REDIS_6_X&#x60; for Redis 6.x compatibility * &#x60;REDIS_7_0&#x60; for Redis 7.0 compatibility | [optional] 
**replica_count** | **int** | Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0. | [optional] 
**reserved_ip_range** | **str** | Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28. | [optional] 
**satisfies_pzi** | **bool** | Optional. Output only. Reserved for future use. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Optional. Output only. Reserved for future use. | [optional] [readonly] 
**secondary_ip_range** | **str** | Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or \&quot;auto\&quot;. For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or \&quot;auto\&quot;. | [optional] 
**server_ca_certs** | [**List[TlsCertificate]**](TlsCertificate.md) | Output only. List of server CA certificates for the instance. | [optional] [readonly] 
**state** | **str** | Output only. The current state of this instance. | [optional] [readonly] 
**status_message** | **str** | Output only. Additional information about the current status of this instance, if available. | [optional] [readonly] 
**suspension_reasons** | **List[str]** | Optional. reasons that causes instance in \&quot;SUSPENDED\&quot; state. | [optional] 
**tier** | **str** | Required. The service tier of the instance. | [optional] 
**transit_encryption_mode** | **str** | Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance. | [optional] 

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


