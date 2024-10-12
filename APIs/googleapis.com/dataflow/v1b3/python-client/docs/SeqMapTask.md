# SeqMapTask

Describes a particular function to invoke.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[SideInputInfo]**](SideInputInfo.md) | Information about each of the inputs. | [optional] 
**name** | **str** | The user-provided name of the SeqDo operation. | [optional] 
**output_infos** | [**List[SeqMapTaskOutputInfo]**](SeqMapTaskOutputInfo.md) | Information about each of the outputs. | [optional] 
**stage_name** | **str** | System-defined name of the stage containing the SeqDo operation. Unique across the workflow. | [optional] 
**system_name** | **str** | System-defined name of the SeqDo operation. Unique across the workflow. | [optional] 
**user_fn** | **Dict[str, object]** | The user function to invoke. | [optional] 

## Example

```python
from openapi_client.models.seq_map_task import SeqMapTask

# TODO update the JSON string below
json = "{}"
# create an instance of SeqMapTask from a JSON string
seq_map_task_instance = SeqMapTask.from_json(json)
# print the JSON string representation of the object
print(SeqMapTask.to_json())

# convert the object into a dict
seq_map_task_dict = seq_map_task_instance.to_dict()
# create an instance of SeqMapTask from a dict
seq_map_task_from_dict = SeqMapTask.from_dict(seq_map_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


