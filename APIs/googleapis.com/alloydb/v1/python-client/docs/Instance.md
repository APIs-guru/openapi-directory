# Instance

An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 | [optional] 
**availability_type** | **str** | Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). | [optional] 
**client_connection_config** | [**ClientConnectionConfig**](ClientConnectionConfig.md) |  | [optional] 
**create_time** | **str** | Output only. Create time stamp | [optional] [readonly] 
**database_flags** | **Dict[str, str]** | Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary. This is a list of \&quot;key\&quot;: \&quot;value\&quot; pairs. \&quot;key\&quot;: The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. \&quot;value\&quot;: The value of the flag. Booleans are set to **on** for true and **off** for false. This field must be omitted if the flag doesn&#39;t take a value. | [optional] 
**delete_time** | **str** | Output only. Delete time stamp | [optional] [readonly] 
**display_name** | **str** | User-settable and human-readable display name for the Instance. | [optional] 
**etag** | **str** | For Resource freshness validation (https://google.aip.dev/154) | [optional] 
**gce_zone** | **str** | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. | [optional] 
**instance_type** | **str** | Required. The type of the instance. Specified at creation time. | [optional] 
**ip_address** | **str** | Output only. The IP address for the Instance. This is the connection endpoint for an end-user application. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels as key value pairs | [optional] 
**machine_config** | [**MachineConfig**](MachineConfig.md) |  | [optional] 
**name** | **str** | Output only. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression &#x60;[a-z]([a-z0-9-]{0,61}[a-z0-9])?&#x60;, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id} | [optional] [readonly] 
**nodes** | [**List[Node]**](Node.md) | Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance. | [optional] [readonly] 
**query_insights_config** | [**QueryInsightsInstanceConfig**](QueryInsightsInstanceConfig.md) |  | [optional] 
**read_pool_config** | [**ReadPoolConfig**](ReadPoolConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of Instance does not match the user&#39;s intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**state** | **str** | Output only. The current serving state of the instance. | [optional] [readonly] 
**uid** | **str** | Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time stamp | [optional] [readonly] 
**writable_node** | [**Node**](Node.md) |  | [optional] 

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


