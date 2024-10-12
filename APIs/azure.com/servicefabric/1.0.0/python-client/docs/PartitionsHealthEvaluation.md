# PartitionsHealthEvaluation

The evaluation of the partitions health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_partitions_per_service** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.partitions_health_evaluation import PartitionsHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionsHealthEvaluation from a JSON string
partitions_health_evaluation_instance = PartitionsHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(PartitionsHealthEvaluation.to_json())

# convert the object into a dict
partitions_health_evaluation_dict = partitions_health_evaluation_instance.to_dict()
# create an instance of PartitionsHealthEvaluation from a dict
partitions_health_evaluation_from_dict = PartitionsHealthEvaluation.from_dict(partitions_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


