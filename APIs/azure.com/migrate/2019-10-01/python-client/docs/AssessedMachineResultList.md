# AssessedMachineResultList

List of assessed machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] 
**value** | [**List[AssessedMachine]**](AssessedMachine.md) | List of assessed machines. | [optional] 

## Example

```python
from openapi_client.models.assessed_machine_result_list import AssessedMachineResultList

# TODO update the JSON string below
json = "{}"
# create an instance of AssessedMachineResultList from a JSON string
assessed_machine_result_list_instance = AssessedMachineResultList.from_json(json)
# print the JSON string representation of the object
print(AssessedMachineResultList.to_json())

# convert the object into a dict
assessed_machine_result_list_dict = assessed_machine_result_list_instance.to_dict()
# create an instance of AssessedMachineResultList from a dict
assessed_machine_result_list_from_dict = AssessedMachineResultList.from_dict(assessed_machine_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


