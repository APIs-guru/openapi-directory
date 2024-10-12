# ReplicationProtectedItemProperties

Replication protected item custom data details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_location** | **str** | The Current active location of the PE. | [optional] 
**allowed_operations** | **List[str]** | The allowed operations on the Replication protected item. | [optional] 
**current_scenario** | [**CurrentScenarioDetails**](CurrentScenarioDetails.md) |  | [optional] 
**failover_health** | **str** | The consolidated failover health for the VM. | [optional] 
**failover_recovery_point_id** | **str** | The recovery point ARM Id to which the Vm was failed over. | [optional] 
**friendly_name** | **str** | The name. | [optional] 
**health_errors** | [**List[HealthError]**](HealthError.md) | List of health errors. | [optional] 
**last_successful_failover_time** | **datetime** | The Last successful failover time. | [optional] 
**last_successful_test_failover_time** | **datetime** | The Last successful test failover time. | [optional] 
**policy_friendly_name** | **str** | The name of Policy governing this PE. | [optional] 
**policy_id** | **str** | The ID of Policy governing this PE. | [optional] 
**primary_fabric_friendly_name** | **str** | The friendly name of the primary fabric. | [optional] 
**primary_fabric_provider** | **str** | The fabric provider of the primary fabric. | [optional] 
**primary_protection_container_friendly_name** | **str** | The name of primary protection container friendly name. | [optional] 
**protectable_item_id** | **str** | The protected item ARM Id. | [optional] 
**protected_item_type** | **str** | The type of protected item type. | [optional] 
**protection_state** | **str** | The protection status. | [optional] 
**protection_state_description** | **str** | The protection state description. | [optional] 
**provider_specific_details** | [**ReplicationProviderSpecificSettings**](ReplicationProviderSpecificSettings.md) |  | [optional] 
**recovery_container_id** | **str** | The recovery container Id. | [optional] 
**recovery_fabric_friendly_name** | **str** | The friendly name of recovery fabric. | [optional] 
**recovery_fabric_id** | **str** | The Arm Id of recovery fabric. | [optional] 
**recovery_protection_container_friendly_name** | **str** | The name of recovery container friendly name. | [optional] 
**recovery_services_provider_id** | **str** | The recovery provider ARM Id. | [optional] 
**replication_health** | **str** | The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM&#39;s replication group into account. This is a string representation of the ProtectionHealth enumeration. | [optional] 
**test_failover_state** | **str** | The Test failover state. | [optional] 
**test_failover_state_description** | **str** | The Test failover state description. | [optional] 

## Example

```python
from openapi_client.models.replication_protected_item_properties import ReplicationProtectedItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProtectedItemProperties from a JSON string
replication_protected_item_properties_instance = ReplicationProtectedItemProperties.from_json(json)
# print the JSON string representation of the object
print(ReplicationProtectedItemProperties.to_json())

# convert the object into a dict
replication_protected_item_properties_dict = replication_protected_item_properties_instance.to_dict()
# create an instance of ReplicationProtectedItemProperties from a dict
replication_protected_item_properties_from_dict = ReplicationProtectedItemProperties.from_dict(replication_protected_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


