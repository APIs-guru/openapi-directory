# AnalyzeOperationResult

Status and result of the queued analyze operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyze_result** | [**AnalyzeResult**](AnalyzeResult.md) |  | [optional] 
**created_date_time** | **datetime** | Date and time (UTC) when the analyze operation was submitted. | 
**last_updated_date_time** | **datetime** | Date and time (UTC) when the status was last updated. | 
**status** | [**OperationStatus**](OperationStatus.md) |  | 

## Example

```python
from openapi_client.models.analyze_operation_result import AnalyzeOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeOperationResult from a JSON string
analyze_operation_result_instance = AnalyzeOperationResult.from_json(json)
# print the JSON string representation of the object
print(AnalyzeOperationResult.to_json())

# convert the object into a dict
analyze_operation_result_dict = analyze_operation_result_instance.to_dict()
# create an instance of AnalyzeOperationResult from a dict
analyze_operation_result_from_dict = AnalyzeOperationResult.from_dict(analyze_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


