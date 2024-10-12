# RunCommandResult

Run command operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RunCommandResultProperties**](RunCommandResultProperties.md) |  | [optional] 
**end_time** | **datetime** | End time of the operation | [optional] [readonly] 
**error** | [**ApiError**](ApiError.md) |  | [optional] 
**name** | **str** | Operation ID | [optional] [readonly] 
**start_time** | **datetime** | Start time of the operation | [optional] [readonly] 
**status** | **str** | Operation status | [optional] [readonly] 

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


