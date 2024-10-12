# TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**skipped** | **float** |  | [optional] 
**step_executions** | [**List[TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInnerStepExecutionsInner]**](TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInnerStepExecutionsInner.md) |  | [optional] 
**step_name** | **str** |  | [optional] 
**step_report_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_get_test_report200_response_features_inner_tests_inner_runs_inner_steps_inner import TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner from a JSON string
test_get_test_report200_response_features_inner_tests_inner_runs_inner_steps_inner_instance = TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner.from_json(json)
# print the JSON string representation of the object
print(TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner.to_json())

# convert the object into a dict
test_get_test_report200_response_features_inner_tests_inner_runs_inner_steps_inner_dict = test_get_test_report200_response_features_inner_tests_inner_runs_inner_steps_inner_instance.to_dict()
# create an instance of TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner from a dict
test_get_test_report200_response_features_inner_tests_inner_runs_inner_steps_inner_from_dict = TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner.from_dict(test_get_test_report200_response_features_inner_tests_inner_runs_inner_steps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


