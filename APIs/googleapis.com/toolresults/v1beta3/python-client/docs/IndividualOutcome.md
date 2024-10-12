# IndividualOutcome

Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multistep_number** | **int** | Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0. | [optional] 
**outcome_summary** | **str** |  | [optional] 
**run_duration** | [**Duration**](Duration.md) |  | [optional] 
**step_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.individual_outcome import IndividualOutcome

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualOutcome from a JSON string
individual_outcome_instance = IndividualOutcome.from_json(json)
# print the JSON string representation of the object
print(IndividualOutcome.to_json())

# convert the object into a dict
individual_outcome_dict = individual_outcome_instance.to_dict()
# create an instance of IndividualOutcome from a dict
individual_outcome_from_dict = IndividualOutcome.from_dict(individual_outcome_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


