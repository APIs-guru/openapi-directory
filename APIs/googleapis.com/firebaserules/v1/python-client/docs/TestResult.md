# TestResult

Test result message containing the state of the test as well as a description and source position for test failures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_messages** | **List[str]** | Debug messages related to test execution issues encountered during evaluation. Debug messages may be related to too many or too few invocations of function mocks or to runtime errors that occur during evaluation. For example: &#x60;&#x60;&#x60;Unable to read variable [name: \&quot;resource\&quot;]&#x60;&#x60;&#x60; | [optional] 
**error_position** | [**SourcePosition**](SourcePosition.md) |  | [optional] 
**expression_reports** | [**List[ExpressionReport]**](ExpressionReport.md) | The mapping from expression in the ruleset AST to the values they were evaluated to. Partially-nested to mirror AST structure. Note that this field is actually tracking expressions and not permission statements in contrast to the \&quot;visited_expressions\&quot; field above. Literal expressions are omitted. | [optional] 
**function_calls** | [**List[FunctionCall]**](FunctionCall.md) | The set of function calls made to service-defined methods. Function calls are included in the order in which they are encountered during evaluation, are provided for both mocked and unmocked functions, and included on the response regardless of the test &#x60;state&#x60;. | [optional] 
**state** | **str** | State of the test. | [optional] 
**visited_expressions** | [**List[VisitedExpression]**](VisitedExpression.md) | The set of visited permission expressions for a given test. This returns the positions and evaluation results of all visited permission expressions which were relevant to the test case, e.g. &#x60;&#x60;&#x60; match /path { allow read if: } &#x60;&#x60;&#x60; For a detailed report of the intermediate evaluation states, see the &#x60;expression_reports&#x60; field | [optional] 

## Example

```python
from openapi_client.models.test_result import TestResult

# TODO update the JSON string below
json = "{}"
# create an instance of TestResult from a JSON string
test_result_instance = TestResult.from_json(json)
# print the JSON string representation of the object
print(TestResult.to_json())

# convert the object into a dict
test_result_dict = test_result_instance.to_dict()
# create an instance of TestResult from a dict
test_result_from_dict = TestResult.from_dict(test_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


