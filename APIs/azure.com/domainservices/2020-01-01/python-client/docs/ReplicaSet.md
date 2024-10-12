# ReplicaSet

Replica Set Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_controller_ip_address** | **List[str]** | List of Domain Controller IP Address | [optional] [readonly] 
**external_access_ip_address** | **str** | External access ip address. | [optional] [readonly] 
**health_alerts** | [**List[HealthAlert]**](HealthAlert.md) | List of Domain Health Alerts | [optional] [readonly] 
**health_last_evaluated** | **datetime** | Last domain evaluation run DateTime | [optional] [readonly] 
**health_monitors** | [**List[HealthMonitor]**](HealthMonitor.md) | List of Domain Health Monitors | [optional] [readonly] 
**location** | **str** | Virtual network location | [optional] 
**replica_set_id** | **str** | ReplicaSet Id | [optional] [readonly] 
**service_status** | **str** | Status of Domain Service instance | [optional] [readonly] 
**subnet_id** | **str** | The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName. | [optional] 
**vnet_site_id** | **str** | Virtual network site id | [optional] [readonly] 

## Example

```python
from openapi_client.models.replica_set import ReplicaSet

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaSet from a JSON string
replica_set_instance = ReplicaSet.from_json(json)
# print the JSON string representation of the object
print(ReplicaSet.to_json())

# convert the object into a dict
replica_set_dict = replica_set_instance.to_dict()
# create an instance of ReplicaSet from a dict
replica_set_from_dict = ReplicaSet.from_dict(replica_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


