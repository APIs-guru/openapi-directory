# TestRunSummary

Most important information about a test run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **bool** | Tells whether the test run has completed | [optional] 
**var_date** | **str** | Date of the test run. | [optional] 
**failed** | **float** | Number of failed tests | [optional] 
**passed** | **float** | Number of passed tests | [optional] 
**status_description** | **str** | Human-readable status of the test run. | [optional] 

## Example

```python
from openapi_client.models.test_run_summary import TestRunSummary

# TODO update the JSON string below
json = "{}"
# create an instance of TestRunSummary from a JSON string
test_run_summary_instance = TestRunSummary.from_json(json)
# print the JSON string representation of the object
print(TestRunSummary.to_json())

# convert the object into a dict
test_run_summary_dict = test_run_summary_instance.to_dict()
# create an instance of TestRunSummary from a dict
test_run_summary_from_dict = TestRunSummary.from_dict(test_run_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


