# ArmDisasterRecoveryListResult

The result of the List Alias(Disaster Recovery configuration) operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of Alias(Disaster Recovery configuration) | [optional] [readonly] 
**value** | [**List[ArmDisasterRecovery]**](ArmDisasterRecovery.md) | List of Alias(Disaster Recovery configurations) | [optional] 

## Example

```python
from openapi_client.models.arm_disaster_recovery_list_result import ArmDisasterRecoveryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ArmDisasterRecoveryListResult from a JSON string
arm_disaster_recovery_list_result_instance = ArmDisasterRecoveryListResult.from_json(json)
# print the JSON string representation of the object
print(ArmDisasterRecoveryListResult.to_json())

# convert the object into a dict
arm_disaster_recovery_list_result_dict = arm_disaster_recovery_list_result_instance.to_dict()
# create an instance of ArmDisasterRecoveryListResult from a dict
arm_disaster_recovery_list_result_from_dict = ArmDisasterRecoveryListResult.from_dict(arm_disaster_recovery_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


