# RepairPhase

RepairPhase tracks the repair attempts that have been made for each `RepairMode` specified in the `Automation` resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retry** | [**RetryPhase**](RetryPhase.md) |  | [optional] 
**rollback** | [**RollbackAttempt**](RollbackAttempt.md) |  | [optional] 

## Example

```python
from openapi_client.models.repair_phase import RepairPhase

# TODO update the JSON string below
json = "{}"
# create an instance of RepairPhase from a JSON string
repair_phase_instance = RepairPhase.from_json(json)
# print the JSON string representation of the object
print(RepairPhase.to_json())

# convert the object into a dict
repair_phase_dict = repair_phase_instance.to_dict()
# create an instance of RepairPhase from a dict
repair_phase_from_dict = RepairPhase.from_dict(repair_phase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


