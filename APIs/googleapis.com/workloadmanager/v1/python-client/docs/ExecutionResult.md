# ExecutionResult

Message describing the result of an execution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentation_url** | **str** | the document url of the rule | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**rule** | **str** | the rule which violate in execution | [optional] 
**severity** | **str** | severity of violation | [optional] 
**violation_details** | [**ViolationDetails**](ViolationDetails.md) |  | [optional] 
**violation_message** | **str** | the violation message of an execution | [optional] 

## Example

```python
from openapi_client.models.execution_result import ExecutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionResult from a JSON string
execution_result_instance = ExecutionResult.from_json(json)
# print the JSON string representation of the object
print(ExecutionResult.to_json())

# convert the object into a dict
execution_result_dict = execution_result_instance.to_dict()
# create an instance of ExecutionResult from a dict
execution_result_from_dict = ExecutionResult.from_dict(execution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


