# OperationResultProperties

The run operation result properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The workflow scope repetition code. | [optional] 
**correlation** | [**RunActionCorrelation**](RunActionCorrelation.md) |  | [optional] 
**end_time** | **datetime** | The end time of the workflow scope repetition. | [optional] 
**error** | **object** |  | [optional] 
**start_time** | **datetime** | The start time of the workflow scope repetition. | [optional] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_result_properties import OperationResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultProperties from a JSON string
operation_result_properties_instance = OperationResultProperties.from_json(json)
# print the JSON string representation of the object
print(OperationResultProperties.to_json())

# convert the object into a dict
operation_result_properties_dict = operation_result_properties_instance.to_dict()
# create an instance of OperationResultProperties from a dict
operation_result_properties_from_dict = OperationResultProperties.from_dict(operation_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


