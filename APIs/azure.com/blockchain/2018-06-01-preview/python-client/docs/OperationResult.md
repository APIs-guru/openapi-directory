# OperationResult

Operation result payload which is exposed in the response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Gets or sets the operation end time. | [optional] 
**name** | **str** | Gets or sets the operation name. | [optional] 
**start_time** | **datetime** | Gets or sets the operation start time. | [optional] 

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


