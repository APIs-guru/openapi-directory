# RoutineReference

Id path of a routine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required. The ID of the dataset containing this routine. | [optional] 
**project_id** | **str** | Required. The ID of the project containing this routine. | [optional] 
**routine_id** | **str** | Required. The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. | [optional] 

## Example

```python
from openapi_client.models.routine_reference import RoutineReference

# TODO update the JSON string below
json = "{}"
# create an instance of RoutineReference from a JSON string
routine_reference_instance = RoutineReference.from_json(json)
# print the JSON string representation of the object
print(RoutineReference.to_json())

# convert the object into a dict
routine_reference_dict = routine_reference_instance.to_dict()
# create an instance of RoutineReference from a dict
routine_reference_from_dict = RoutineReference.from_dict(routine_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


