# PartitionMetricListResult

The response to a list partition metrics request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PartitionMetric]**](PartitionMetric.md) | The list of partition-level metrics for the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.partition_metric_list_result import PartitionMetricListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionMetricListResult from a JSON string
partition_metric_list_result_instance = PartitionMetricListResult.from_json(json)
# print the JSON string representation of the object
print(PartitionMetricListResult.to_json())

# convert the object into a dict
partition_metric_list_result_dict = partition_metric_list_result_instance.to_dict()
# create an instance of PartitionMetricListResult from a dict
partition_metric_list_result_from_dict = PartitionMetricListResult.from_dict(partition_metric_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


