# OperationResult

The operation result definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | **object** |  | [optional] 
**inputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**iteration_count** | **int** |  | [optional] 
**outputs** | **object** |  | [optional] 
**outputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**retry_history** | [**List[RetryHistory]**](RetryHistory.md) | Gets the retry histories. | [optional] 
**tracked_properties** | **object** |  | [optional] 
**tracking_id** | **str** | Gets the tracking id. | [optional] [readonly] 
**code** | **str** | The workflow scope repetition code. | [optional] 
**correlation** | [**RunActionCorrelation**](RunActionCorrelation.md) |  | [optional] 
**end_time** | **datetime** | The end time of the workflow scope repetition. | [optional] 
**error** | **object** |  | [optional] 
**start_time** | **datetime** | The start time of the workflow scope repetition. | [optional] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_result import OperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResult from a JSON string
operation_result_instance = OperationResult.from_json(json)
# print the JSON string representation of the object
print(OperationResult.to_json())

# convert the object into a dict
operation_result_dict = operation_result_instance.to_dict()
# create an instance of OperationResult from a dict
operation_result_from_dict = OperationResult.from_dict(operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


