# PrimaryStep

Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**individual_outcome** | [**List[IndividualOutcome]**](IndividualOutcome.md) | Step Id and outcome of each individual step. | [optional] 
**roll_up** | **str** | Rollup test status of multiple steps that were run with the same configuration as a group. | [optional] 

## Example

```python
from openapi_client.models.primary_step import PrimaryStep

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryStep from a JSON string
primary_step_instance = PrimaryStep.from_json(json)
# print the JSON string representation of the object
print(PrimaryStep.to_json())

# convert the object into a dict
primary_step_dict = primary_step_instance.to_dict()
# create an instance of PrimaryStep from a dict
primary_step_from_dict = PrimaryStep.from_dict(primary_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


