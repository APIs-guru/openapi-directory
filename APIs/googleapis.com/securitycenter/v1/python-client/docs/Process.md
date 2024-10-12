# Process

Represents an operating system process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Process arguments as JSON encoded strings. | [optional] 
**arguments_truncated** | **bool** | True if &#x60;args&#x60; is incomplete. | [optional] 
**binary** | [**File**](File.md) |  | [optional] 
**env_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) | Process environment variables. | [optional] 
**env_variables_truncated** | **bool** | True if &#x60;env_variables&#x60; is incomplete. | [optional] 
**libraries** | [**List[File]**](File.md) | File information for libraries loaded by the process. | [optional] 
**name** | **str** | The process name, as displayed in utilities like &#x60;top&#x60; and &#x60;ps&#x60;. This name can be accessed through &#x60;/proc/[pid]/comm&#x60; and changed with &#x60;prctl(PR_SET_NAME)&#x60;. | [optional] 
**parent_pid** | **str** | The parent process ID. | [optional] 
**pid** | **str** | The process ID. | [optional] 
**script** | [**File**](File.md) |  | [optional] 

## Example

```python
from openapi_client.models.process import Process

# TODO update the JSON string below
json = "{}"
# create an instance of Process from a JSON string
process_instance = Process.from_json(json)
# print the JSON string representation of the object
print(Process.to_json())

# convert the object into a dict
process_dict = process_instance.to_dict()
# create an instance of Process from a dict
process_from_dict = Process.from_dict(process_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


