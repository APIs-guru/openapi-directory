# OSPolicyResourceExecResourceExec

A file or script to execute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Optional arguments to pass to the source during execution. | [optional] 
**file** | [**OSPolicyResourceFile**](OSPolicyResourceFile.md) |  | [optional] 
**interpreter** | **str** | Required. The script interpreter to use. | [optional] 
**output_file_path** | **str** | Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes. | [optional] 
**script** | **str** | An inline script. The size of the script is limited to 32KiB. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_exec_resource_exec import OSPolicyResourceExecResourceExec

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceExecResourceExec from a JSON string
os_policy_resource_exec_resource_exec_instance = OSPolicyResourceExecResourceExec.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceExecResourceExec.to_json())

# convert the object into a dict
os_policy_resource_exec_resource_exec_dict = os_policy_resource_exec_resource_exec_instance.to_dict()
# create an instance of OSPolicyResourceExecResourceExec from a dict
os_policy_resource_exec_resource_exec_from_dict = OSPolicyResourceExecResourceExec.from_dict(os_policy_resource_exec_resource_exec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


