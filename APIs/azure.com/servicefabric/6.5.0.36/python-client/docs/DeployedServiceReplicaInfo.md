# DeployedServiceReplicaInfo

Information about a Service Fabric service replica deployed on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The last address returned by the replica in Open or ChangeRole. | [optional] 
**code_package_name** | **str** | The name of the code package defined in the service manifest. | [optional] 
**host_process_id** | **str** | Host process ID of the process that is hosting the replica. This will be zero if the replica is down. In hyper-v containers this host process ID will be from different kernel. | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**replica_status** | [**ReplicaStatus**](ReplicaStatus.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string. | [optional] 
**service_type_name** | **str** | Name of the service type as specified in the service manifest. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_replica_info import DeployedServiceReplicaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServiceReplicaInfo from a JSON string
deployed_service_replica_info_instance = DeployedServiceReplicaInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedServiceReplicaInfo.to_json())

# convert the object into a dict
deployed_service_replica_info_dict = deployed_service_replica_info_instance.to_dict()
# create an instance of DeployedServiceReplicaInfo from a dict
deployed_service_replica_info_from_dict = DeployedServiceReplicaInfo.from_dict(deployed_service_replica_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


