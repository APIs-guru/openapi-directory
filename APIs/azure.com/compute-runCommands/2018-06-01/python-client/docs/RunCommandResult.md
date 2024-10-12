# RunCommandResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | Run command operation response. | [optional] 

## Example

```python
from openapi_client.models.run_command_result import RunCommandResult

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandResult from a JSON string
run_command_result_instance = RunCommandResult.from_json(json)
# print the JSON string representation of the object
print(RunCommandResult.to_json())

# convert the object into a dict
run_command_result_dict = run_command_result_instance.to_dict()
# create an instance of RunCommandResult from a dict
run_command_result_from_dict = RunCommandResult.from_dict(run_command_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


