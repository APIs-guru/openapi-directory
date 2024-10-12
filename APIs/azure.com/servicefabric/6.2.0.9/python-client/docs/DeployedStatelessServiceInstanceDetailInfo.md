# DeployedStatelessServiceInstanceDetailInfo

Information about a stateless instance running in a code package. Please note that DeployedServiceReplicaQueryResult will contain duplicate data like ServiceKind, ServiceName, PartitionId and InstanceId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_service_replica_query_result** | [**DeployedStatelessServiceInstanceInfo**](DeployedStatelessServiceInstanceInfo.md) |  | [optional] 
**instance_id** | **str** | Id of a stateless service instance. InstanceId is used by Service Fabric to uniquely identify an instance of a partition of a stateless service. It is unique within a partition and does not change for the lifetime of the instance. If the instance has failed over on the same or different node, it will get a different value for the InstanceId. | [optional] 

## Example

```python
from openapi_client.models.deployed_stateless_service_instance_detail_info import DeployedStatelessServiceInstanceDetailInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedStatelessServiceInstanceDetailInfo from a JSON string
deployed_stateless_service_instance_detail_info_instance = DeployedStatelessServiceInstanceDetailInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedStatelessServiceInstanceDetailInfo.to_json())

# convert the object into a dict
deployed_stateless_service_instance_detail_info_dict = deployed_stateless_service_instance_detail_info_instance.to_dict()
# create an instance of DeployedStatelessServiceInstanceDetailInfo from a dict
deployed_stateless_service_instance_detail_info_from_dict = DeployedStatelessServiceInstanceDetailInfo.from_dict(deployed_stateless_service_instance_detail_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


