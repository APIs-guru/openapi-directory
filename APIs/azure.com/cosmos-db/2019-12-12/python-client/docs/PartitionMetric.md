# PartitionMetric

The metric values for a single partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | The partition id (GUID identifier) of the metric values. | [optional] [readonly] 
**partition_key_range_id** | **str** | The partition key range id (integer identifier) of the metric values. | [optional] [readonly] 
**end_time** | **datetime** | The end time for the metric (ISO-8601 format). | [optional] [readonly] 
**metric_values** | [**List[MetricValue]**](MetricValue.md) | The metric values for the specified time window and timestep. | [optional] [readonly] 
**name** | [**MetricName**](MetricName.md) |  | [optional] 
**start_time** | **datetime** | The start time for the metric (ISO-8601 format). | [optional] [readonly] 
**time_grain** | **str** | The time grain to be used to summarize the metric values. | [optional] [readonly] 
**unit** | [**UnitType**](UnitType.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_metric import PartitionMetric

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionMetric from a JSON string
partition_metric_instance = PartitionMetric.from_json(json)
# print the JSON string representation of the object
print(PartitionMetric.to_json())

# convert the object into a dict
partition_metric_dict = partition_metric_instance.to_dict()
# create an instance of PartitionMetric from a dict
partition_metric_from_dict = PartitionMetric.from_dict(partition_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


