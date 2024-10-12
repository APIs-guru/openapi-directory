# PartitionHealthEvaluation

The evaluation of the partition health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_health_evaluation import PartitionHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealthEvaluation from a JSON string
partition_health_evaluation_instance = PartitionHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(PartitionHealthEvaluation.to_json())

# convert the object into a dict
partition_health_evaluation_dict = partition_health_evaluation_instance.to_dict()
# create an instance of PartitionHealthEvaluation from a dict
partition_health_evaluation_from_dict = PartitionHealthEvaluation.from_dict(partition_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


