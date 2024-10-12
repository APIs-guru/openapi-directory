# TestExecutionStep

A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_issues** | [**List[TestIssue]**](TestIssue.md) | Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional | [optional] 
**test_suite_overviews** | [**List[TestSuiteOverview]**](TestSuiteOverview.md) | List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead) | [optional] 
**test_timing** | [**TestTiming**](TestTiming.md) |  | [optional] 
**tool_execution** | [**ToolExecution**](ToolExecution.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_execution_step import TestExecutionStep

# TODO update the JSON string below
json = "{}"
# create an instance of TestExecutionStep from a JSON string
test_execution_step_instance = TestExecutionStep.from_json(json)
# print the JSON string representation of the object
print(TestExecutionStep.to_json())

# convert the object into a dict
test_execution_step_dict = test_execution_step_instance.to_dict()
# create an instance of TestExecutionStep from a dict
test_execution_step_from_dict = TestExecutionStep.from_dict(test_execution_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


