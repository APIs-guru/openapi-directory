# OSPolicyResourceExecResource

A resource that allows executing scripts on the VM. The `ExecResource` has 2 stages: `validate` and `enforce` and both stages accept a script as an argument to execute. When the `ExecResource` is applied by the agent, it first executes the script in the `validate` stage. The `validate` stage can signal that the `ExecResource` is already in the desired state by returning an exit code of `100`. If the `ExecResource` is not in the desired state, it should return an exit code of `101`. Any other exit code returned by this stage is considered an error. If the `ExecResource` is not in the desired state based on the exit code from the `validate` stage, the agent proceeds to execute the script from the `enforce` stage. If the `ExecResource` is already in the desired state, the `enforce` stage will not be run. Similar to `validate` stage, the `enforce` stage should return an exit code of `100` to indicate that the resource in now in its desired state. Any other exit code is considered an error. NOTE: An exit code of `100` was chosen over `0` (and `101` vs `1`) to have an explicit indicator of `in desired state`, `not in desired state` and errors. Because, for example, Powershell will always return an exit code of `0` unless an `exit` statement is provided in the script. So, for reasons of consistency and being explicit, exit codes `100` and `101` were chosen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforce** | [**OSPolicyResourceExecResourceExec**](OSPolicyResourceExecResourceExec.md) |  | [optional] 
**validate** | [**OSPolicyResourceExecResourceExec**](OSPolicyResourceExecResourceExec.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_exec_resource import OSPolicyResourceExecResource

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceExecResource from a JSON string
os_policy_resource_exec_resource_instance = OSPolicyResourceExecResource.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceExecResource.to_json())

# convert the object into a dict
os_policy_resource_exec_resource_dict = os_policy_resource_exec_resource_instance.to_dict()
# create an instance of OSPolicyResourceExecResource from a dict
os_policy_resource_exec_resource_from_dict = OSPolicyResourceExecResource.from_dict(os_policy_resource_exec_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


