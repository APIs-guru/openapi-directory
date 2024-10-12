# RunningProcessList

List of running guest OS processes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processes** | [**List[RunningProcess]**](RunningProcess.md) | Running process entries. | [optional] 

## Example

```python
from openapi_client.models.running_process_list import RunningProcessList

# TODO update the JSON string below
json = "{}"
# create an instance of RunningProcessList from a JSON string
running_process_list_instance = RunningProcessList.from_json(json)
# print the JSON string representation of the object
print(RunningProcessList.to_json())

# convert the object into a dict
running_process_list_dict = running_process_list_instance.to_dict()
# create an instance of RunningProcessList from a dict
running_process_list_from_dict = RunningProcessList.from_dict(running_process_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


