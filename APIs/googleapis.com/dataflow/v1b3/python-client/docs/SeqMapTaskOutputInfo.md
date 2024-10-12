# SeqMapTaskOutputInfo

Information about an output of a SeqMapTask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sink** | [**Sink**](Sink.md) |  | [optional] 
**tag** | **str** | The id of the TupleTag the user code will tag the output value by. | [optional] 

## Example

```python
from openapi_client.models.seq_map_task_output_info import SeqMapTaskOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SeqMapTaskOutputInfo from a JSON string
seq_map_task_output_info_instance = SeqMapTaskOutputInfo.from_json(json)
# print the JSON string representation of the object
print(SeqMapTaskOutputInfo.to_json())

# convert the object into a dict
seq_map_task_output_info_dict = seq_map_task_output_info_instance.to_dict()
# create an instance of SeqMapTaskOutputInfo from a dict
seq_map_task_output_info_from_dict = SeqMapTaskOutputInfo.from_dict(seq_map_task_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


