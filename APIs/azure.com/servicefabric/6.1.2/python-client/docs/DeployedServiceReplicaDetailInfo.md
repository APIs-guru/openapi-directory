# DeployedServiceReplicaDetailInfo

Information about a Service Fabric service replica deployed on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_service_operation** | [**ServiceOperationName**](ServiceOperationName.md) |  | [optional] 
**current_service_operation_start_time_utc** | **datetime** | The start time of the current service operation in UTC format. | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different. | [optional] 
**reported_load** | [**List[LoadMetricReportInfo]**](LoadMetricReportInfo.md) | List of load reported by replica. | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_replica_detail_info import DeployedServiceReplicaDetailInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServiceReplicaDetailInfo from a JSON string
deployed_service_replica_detail_info_instance = DeployedServiceReplicaDetailInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedServiceReplicaDetailInfo.to_json())

# convert the object into a dict
deployed_service_replica_detail_info_dict = deployed_service_replica_detail_info_instance.to_dict()
# create an instance of DeployedServiceReplicaDetailInfo from a dict
deployed_service_replica_detail_info_from_dict = DeployedServiceReplicaDetailInfo.from_dict(deployed_service_replica_detail_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


