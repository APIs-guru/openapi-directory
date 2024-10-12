# TestGetTestReport200ResponseFeaturesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**peak_duration** | **float** |  | [optional] 
**peak_memory** | **float** |  | [optional] 
**skipped** | **float** |  | [optional] 
**tests** | [**List[TestGetTestReport200ResponseFeaturesInnerTestsInner]**](TestGetTestReport200ResponseFeaturesInnerTestsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_get_test_report200_response_features_inner import TestGetTestReport200ResponseFeaturesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetTestReport200ResponseFeaturesInner from a JSON string
test_get_test_report200_response_features_inner_instance = TestGetTestReport200ResponseFeaturesInner.from_json(json)
# print the JSON string representation of the object
print(TestGetTestReport200ResponseFeaturesInner.to_json())

# convert the object into a dict
test_get_test_report200_response_features_inner_dict = test_get_test_report200_response_features_inner_instance.to_dict()
# create an instance of TestGetTestReport200ResponseFeaturesInner from a dict
test_get_test_report200_response_features_inner_from_dict = TestGetTestReport200ResponseFeaturesInner.from_dict(test_get_test_report200_response_features_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


