# TestCaseReference

A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_name** | **str** | The name of the class. | [optional] 
**name** | **str** | The name of the test case. Required. | [optional] 
**test_suite_name** | **str** | The name of the test suite to which this test case belongs. | [optional] 

## Example

```python
from openapi_client.models.test_case_reference import TestCaseReference

# TODO update the JSON string below
json = "{}"
# create an instance of TestCaseReference from a JSON string
test_case_reference_instance = TestCaseReference.from_json(json)
# print the JSON string representation of the object
print(TestCaseReference.to_json())

# convert the object into a dict
test_case_reference_dict = test_case_reference_instance.to_dict()
# create an instance of TestCaseReference from a dict
test_case_reference_from_dict = TestCaseReference.from_dict(test_case_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


