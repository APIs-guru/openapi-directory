# RunningProcess

Guest OS running process details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **Dict[str, str]** | Process extended attributes. | [optional] 
**cmdline** | **str** | Process full command line. | [optional] 
**exe_path** | **str** | Process binary path. | [optional] 
**pid** | **str** | Process ID. | [optional] 
**user** | **str** | User running the process. | [optional] 

## Example

```python
from openapi_client.models.running_process import RunningProcess

# TODO update the JSON string below
json = "{}"
# create an instance of RunningProcess from a JSON string
running_process_instance = RunningProcess.from_json(json)
# print the JSON string representation of the object
print(RunningProcess.to_json())

# convert the object into a dict
running_process_dict = running_process_instance.to_dict()
# create an instance of RunningProcess from a dict
running_process_from_dict = RunningProcess.from_dict(running_process_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


