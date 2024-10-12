# RunCommandListResult

The List Virtual Machine operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands. | [optional] 
**value** | [**List[RunCommandDocumentBase]**](RunCommandDocumentBase.md) | The list of virtual machine run commands. | 

## Example

```python
from openapi_client.models.run_command_list_result import RunCommandListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandListResult from a JSON string
run_command_list_result_instance = RunCommandListResult.from_json(json)
# print the JSON string representation of the object
print(RunCommandListResult.to_json())

# convert the object into a dict
run_command_list_result_dict = run_command_list_result_instance.to_dict()
# create an instance of RunCommandListResult from a dict
run_command_list_result_from_dict = RunCommandListResult.from_dict(run_command_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


