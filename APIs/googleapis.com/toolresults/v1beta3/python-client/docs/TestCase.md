# TestCase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_time** | [**Duration**](Duration.md) |  | [optional] 
**end_time** | [**Timestamp**](Timestamp.md) |  | [optional] 
**skipped_message** | **str** | Why the test case was skipped. Present only for skipped test case | [optional] 
**stack_traces** | [**List[StackTrace]**](StackTrace.md) | The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed. | [optional] 
**start_time** | [**Timestamp**](Timestamp.md) |  | [optional] 
**status** | **str** | The status of the test case. Required. | [optional] 
**test_case_id** | **str** | A unique identifier within a Step for this Test Case. | [optional] 
**test_case_reference** | [**TestCaseReference**](TestCaseReference.md) |  | [optional] 
**tool_outputs** | [**List[ToolOutputReference]**](ToolOutputReference.md) | References to opaque files of any format output by the tool execution. @OutputOnly | [optional] 

## Example

```python
from openapi_client.models.test_case import TestCase

# TODO update the JSON string below
json = "{}"
# create an instance of TestCase from a JSON string
test_case_instance = TestCase.from_json(json)
# print the JSON string representation of the object
print(TestCase.to_json())

# convert the object into a dict
test_case_dict = test_case_instance.to_dict()
# create an instance of TestCase from a dict
test_case_from_dict = TestCase.from_dict(test_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


