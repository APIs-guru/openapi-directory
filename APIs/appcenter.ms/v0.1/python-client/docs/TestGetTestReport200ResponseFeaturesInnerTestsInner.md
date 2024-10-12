# TestGetTestReport200ResponseFeaturesInnerTestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peak_duration** | **float** |  | [optional] 
**peak_memory** | **float** |  | [optional] 
**runs** | [**List[TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner]**](TestGetTestReport200ResponseFeaturesInnerTestsInnerRunsInner.md) |  | [optional] 
**test_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_get_test_report200_response_features_inner_tests_inner import TestGetTestReport200ResponseFeaturesInnerTestsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetTestReport200ResponseFeaturesInnerTestsInner from a JSON string
test_get_test_report200_response_features_inner_tests_inner_instance = TestGetTestReport200ResponseFeaturesInnerTestsInner.from_json(json)
# print the JSON string representation of the object
print(TestGetTestReport200ResponseFeaturesInnerTestsInner.to_json())

# convert the object into a dict
test_get_test_report200_response_features_inner_tests_inner_dict = test_get_test_report200_response_features_inner_tests_inner_instance.to_dict()
# create an instance of TestGetTestReport200ResponseFeaturesInnerTestsInner from a dict
test_get_test_report200_response_features_inner_tests_inner_from_dict = TestGetTestReport200ResponseFeaturesInnerTestsInner.from_dict(test_get_test_report200_response_features_inner_tests_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


