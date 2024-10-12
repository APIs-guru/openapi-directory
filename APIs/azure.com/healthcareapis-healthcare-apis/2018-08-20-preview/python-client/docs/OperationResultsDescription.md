# OperationResultsDescription

The properties indicating the operation result of an operation on a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the operation returned. | [optional] [readonly] 
**name** | **str** | The name of the operation result. | [optional] [readonly] 
**properties** | **object** | Additional properties of the operation result. | [optional] 
**start_time** | **str** | The time that the operation was started. | [optional] [readonly] 
**status** | **str** | The status of the operation being performed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_results_description import OperationResultsDescription

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultsDescription from a JSON string
operation_results_description_instance = OperationResultsDescription.from_json(json)
# print the JSON string representation of the object
print(OperationResultsDescription.to_json())

# convert the object into a dict
operation_results_description_dict = operation_results_description_instance.to_dict()
# create an instance of OperationResultsDescription from a dict
operation_results_description_from_dict = OperationResultsDescription.from_dict(operation_results_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


