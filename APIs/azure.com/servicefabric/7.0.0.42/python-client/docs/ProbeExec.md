# ProbeExec

Exec command to run inside the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Comma separated command to run inside the container for example \&quot;sh, -c, echo hello world\&quot;. | 

## Example

```python
from openapi_client.models.probe_exec import ProbeExec

# TODO update the JSON string below
json = "{}"
# create an instance of ProbeExec from a JSON string
probe_exec_instance = ProbeExec.from_json(json)
# print the JSON string representation of the object
print(ProbeExec.to_json())

# convert the object into a dict
probe_exec_dict = probe_exec_instance.to_dict()
# create an instance of ProbeExec from a dict
probe_exec_from_dict = ProbeExec.from_dict(probe_exec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


