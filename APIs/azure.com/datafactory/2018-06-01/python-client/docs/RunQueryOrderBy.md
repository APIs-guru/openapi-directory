# RunQueryOrderBy

An object to provide order by options for listing runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **str** | Sorting order of the parameter. | 
**order_by** | **str** | Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status. | 

## Example

```python
from openapi_client.models.run_query_order_by import RunQueryOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of RunQueryOrderBy from a JSON string
run_query_order_by_instance = RunQueryOrderBy.from_json(json)
# print the JSON string representation of the object
print(RunQueryOrderBy.to_json())

# convert the object into a dict
run_query_order_by_dict = run_query_order_by_instance.to_dict()
# create an instance of RunQueryOrderBy from a dict
run_query_order_by_from_dict = RunQueryOrderBy.from_dict(run_query_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


