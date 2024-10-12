# RunMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | **List[Dict[str, object]]** |  | [optional] 
**created_utc** | **datetime** |  | [optional] 
**data_container_id** | **str** |  | [optional] 
**data_location** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**metric_id** | **str** |  | [optional] 
**metric_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**num_cells** | **int** |  | [optional] 
**run_id** | **str** |  | [optional] 
**var_schema** | [**MetricSchema**](MetricSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_metric import RunMetric

# TODO update the JSON string below
json = "{}"
# create an instance of RunMetric from a JSON string
run_metric_instance = RunMetric.from_json(json)
# print the JSON string representation of the object
print(RunMetric.to_json())

# convert the object into a dict
run_metric_dict = run_metric_instance.to_dict()
# create an instance of RunMetric from a dict
run_metric_from_dict = RunMetric.from_dict(run_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


