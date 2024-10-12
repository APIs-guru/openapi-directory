# AssessedMachine

A machine evaluated as part of an assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | For optimistic concurrency control. | [optional] 
**id** | **str** | Path reference to this assessed machine. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName} | [optional] [readonly] 
**name** | **str** | Name of the machine. | [optional] [readonly] 
**properties** | [**AssessedMachineProperties**](AssessedMachineProperties.md) |  | [optional] 
**type** | **str** | Type of the object &#x3D; [Microsoft.Migrate/projects/groups/assessments/assessedMachines]. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessed_machine import AssessedMachine

# TODO update the JSON string below
json = "{}"
# create an instance of AssessedMachine from a JSON string
assessed_machine_instance = AssessedMachine.from_json(json)
# print the JSON string representation of the object
print(AssessedMachine.to_json())

# convert the object into a dict
assessed_machine_dict = assessed_machine_instance.to_dict()
# create an instance of AssessedMachine from a dict
assessed_machine_from_dict = AssessedMachine.from_dict(assessed_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


