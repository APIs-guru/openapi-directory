# CounterStructuredName

Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_step_name** | **str** | Name of the optimized step being executed by the workers. | [optional] 
**execution_step_name** | **str** | Name of the stage. An execution step contains multiple component steps. | [optional] 
**input_index** | **int** | Index of an input collection that&#39;s being read from/written to as a side input. The index identifies a step&#39;s side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them. | [optional] 
**name** | **str** | Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required. | [optional] 
**origin** | **str** | One of the standard Origins defined above. | [optional] 
**origin_namespace** | **str** | A string containing a more specific namespace of the counter&#39;s origin. | [optional] 
**original_requesting_step_name** | **str** | The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs. | [optional] 
**original_step_name** | **str** | System generated name of the original step in the user&#39;s graph, before optimization. | [optional] 
**portion** | **str** | Portion of this counter, either key or value. | [optional] 
**worker_id** | **str** | ID of a particular worker. | [optional] 

## Example

```python
from openapi_client.models.counter_structured_name import CounterStructuredName

# TODO update the JSON string below
json = "{}"
# create an instance of CounterStructuredName from a JSON string
counter_structured_name_instance = CounterStructuredName.from_json(json)
# print the JSON string representation of the object
print(CounterStructuredName.to_json())

# convert the object into a dict
counter_structured_name_dict = counter_structured_name_instance.to_dict()
# create an instance of CounterStructuredName from a dict
counter_structured_name_from_dict = CounterStructuredName.from_dict(counter_structured_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


