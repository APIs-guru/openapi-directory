# Metric


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
**var_schema** | [**MetricSchema**](MetricSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric import Metric

# TODO update the JSON string below
json = "{}"
# create an instance of Metric from a JSON string
metric_instance = Metric.from_json(json)
# print the JSON string representation of the object
print(Metric.to_json())

# convert the object into a dict
metric_dict = metric_instance.to_dict()
# create an instance of Metric from a dict
metric_from_dict = Metric.from_dict(metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


