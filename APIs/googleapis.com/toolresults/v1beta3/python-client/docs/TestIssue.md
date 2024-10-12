# TestIssue

An issue detected occurring during a test execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of issue. Required. | [optional] 
**error_message** | **str** | A brief human-readable message describing the issue. Required. | [optional] 
**severity** | **str** | Severity of issue. Required. | [optional] 
**stack_trace** | [**StackTrace**](StackTrace.md) |  | [optional] 
**type** | **str** | Type of issue. Required. | [optional] 
**warning** | [**Any**](Any.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_issue import TestIssue

# TODO update the JSON string below
json = "{}"
# create an instance of TestIssue from a JSON string
test_issue_instance = TestIssue.from_json(json)
# print the JSON string representation of the object
print(TestIssue.to_json())

# convert the object into a dict
test_issue_dict = test_issue_instance.to_dict()
# create an instance of TestIssue from a dict
test_issue_from_dict = TestIssue.from_dict(test_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


