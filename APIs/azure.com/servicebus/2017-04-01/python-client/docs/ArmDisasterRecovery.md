# ArmDisasterRecovery

Single item in List or Get Alias(Disaster Recovery configuration) operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Properties required to the Create Or Update Alias(Disaster Recovery configurations) | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.arm_disaster_recovery import ArmDisasterRecovery

# TODO update the JSON string below
json = "{}"
# create an instance of ArmDisasterRecovery from a JSON string
arm_disaster_recovery_instance = ArmDisasterRecovery.from_json(json)
# print the JSON string representation of the object
print(ArmDisasterRecovery.to_json())

# convert the object into a dict
arm_disaster_recovery_dict = arm_disaster_recovery_instance.to_dict()
# create an instance of ArmDisasterRecovery from a dict
arm_disaster_recovery_from_dict = ArmDisasterRecovery.from_dict(arm_disaster_recovery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


