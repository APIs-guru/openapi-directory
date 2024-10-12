# TestSuiteOverview

A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elapsed_time** | [**Duration**](Duration.md) |  | [optional] 
**error_count** | **int** | Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never | [optional] 
**failure_count** | **int** | Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never | [optional] 
**flaky_count** | **int** | Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases. | [optional] 
**name** | **str** | The name of the test suite. - In create/response: always set - In update request: never | [optional] 
**skipped_count** | **int** | Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never | [optional] 
**total_count** | **int** | Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never | [optional] 
**xml_source** | [**FileReference**](FileReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_suite_overview import TestSuiteOverview

# TODO update the JSON string below
json = "{}"
# create an instance of TestSuiteOverview from a JSON string
test_suite_overview_instance = TestSuiteOverview.from_json(json)
# print the JSON string representation of the object
print(TestSuiteOverview.to_json())

# convert the object into a dict
test_suite_overview_dict = test_suite_overview_instance.to_dict()
# create an instance of TestSuiteOverview from a dict
test_suite_overview_from_dict = TestSuiteOverview.from_dict(test_suite_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


