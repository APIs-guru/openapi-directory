# RunQueryFilter

Query filter option for listing runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operand** | **str** | Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status. | 
**operator** | **str** | Operator to be used for filter. | 
**values** | **List[str]** | List of filter values. | 

## Example

```python
from openapi_client.models.run_query_filter import RunQueryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of RunQueryFilter from a JSON string
run_query_filter_instance = RunQueryFilter.from_json(json)
# print the JSON string representation of the object
print(RunQueryFilter.to_json())

# convert the object into a dict
run_query_filter_dict = run_query_filter_instance.to_dict()
# create an instance of RunQueryFilter from a dict
run_query_filter_from_dict = RunQueryFilter.from_dict(run_query_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


