# TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**number** | **float** |  | [optional] 
**report_url** | **str** |  | [optional] 
**skipped** | **float** |  | [optional] 
**steps** | [**List[TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner]**](TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInnerStepsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_get_test_report200_response_features_inner_tests_inner_runs_inner import TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner from a JSON string
test_get_test_report200_response_features_inner_tests_inner_runs_inner_instance = TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner.from_json(json)
# print the JSON string representation of the object
print(TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner.to_json())

# convert the object into a dict
test_get_test_report200_response_features_inner_tests_inner_runs_inner_dict = test_get_test_report200_response_features_inner_tests_inner_runs_inner_instance.to_dict()
# create an instance of TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner from a dict
test_get_test_report200_response_features_inner_tests_inner_runs_inner_from_dict = TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner.from_dict(test_get_test_report200_response_features_inner_tests_inner_runs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


