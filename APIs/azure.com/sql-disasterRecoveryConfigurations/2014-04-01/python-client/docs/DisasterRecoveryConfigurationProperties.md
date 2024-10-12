# DisasterRecoveryConfigurationProperties

Represents the properties of a disaster recovery configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_failover** | **str** | Whether or not failover can be done automatically. | 
**failover_policy** | **str** | How aggressive the automatic failover should be. | 
**logical_server_name** | **str** | Logical name of the server. | [optional] [readonly] 
**partner_logical_server_name** | **str** | Logical name of the partner server. | [optional] [readonly] 
**partner_server_id** | **str** | Id of the partner server. | 
**role** | **str** | The role of the current server in the disaster recovery configuration. | [optional] [readonly] 
**status** | **str** | The status of the disaster recovery configuration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disaster_recovery_configuration_properties import DisasterRecoveryConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DisasterRecoveryConfigurationProperties from a JSON string
disaster_recovery_configuration_properties_instance = DisasterRecoveryConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(DisasterRecoveryConfigurationProperties.to_json())

# convert the object into a dict
disaster_recovery_configuration_properties_dict = disaster_recovery_configuration_properties_instance.to_dict()
# create an instance of DisasterRecoveryConfigurationProperties from a dict
disaster_recovery_configuration_properties_from_dict = DisasterRecoveryConfigurationProperties.from_dict(disaster_recovery_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


