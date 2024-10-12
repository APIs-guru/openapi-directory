# OperationStage

Information about a particular stage of an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Time the stage ended. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | Progress metric bundle. | [optional] 
**stage** | **str** | The high-level stage of the operation. | [optional] 
**start_time** | **str** | Time the stage started. | [optional] 
**state** | **str** | Output only. State of the stage. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_stage import OperationStage

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStage from a JSON string
operation_stage_instance = OperationStage.from_json(json)
# print the JSON string representation of the object
print(OperationStage.to_json())

# convert the object into a dict
operation_stage_dict = operation_stage_instance.to_dict()
# create an instance of OperationStage from a dict
operation_stage_from_dict = OperationStage.from_dict(operation_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


