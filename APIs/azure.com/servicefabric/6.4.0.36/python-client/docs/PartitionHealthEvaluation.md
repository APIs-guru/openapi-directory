# PartitionHealthEvaluation

Represents health evaluation for a partition, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

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


