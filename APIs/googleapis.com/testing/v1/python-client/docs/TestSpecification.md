# TestSpecification

A description of how to run the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_instrumentation_test** | [**AndroidInstrumentationTest**](AndroidInstrumentationTest.md) |  | [optional] 
**android_robo_test** | [**AndroidRoboTest**](AndroidRoboTest.md) |  | [optional] 
**android_test_loop** | [**AndroidTestLoop**](AndroidTestLoop.md) |  | [optional] 
**disable_performance_metrics** | **bool** | Disables performance metrics recording. May reduce test latency. | [optional] 
**disable_video_recording** | **bool** | Disables video recording. May reduce test latency. | [optional] 
**ios_robo_test** | [**IosRoboTest**](IosRoboTest.md) |  | [optional] 
**ios_test_loop** | [**IosTestLoop**](IosTestLoop.md) |  | [optional] 
**ios_test_setup** | [**IosTestSetup**](IosTestSetup.md) |  | [optional] 
**ios_xc_test** | [**IosXcTest**](IosXcTest.md) |  | [optional] 
**test_setup** | [**TestSetup**](TestSetup.md) |  | [optional] 
**test_timeout** | **str** | Max time a test execution is allowed to run before it is automatically cancelled. The default value is 5 min. | [optional] 

## Example

```python
from openapi_client.models.test_specification import TestSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of TestSpecification from a JSON string
test_specification_instance = TestSpecification.from_json(json)
# print the JSON string representation of the object
print(TestSpecification.to_json())

# convert the object into a dict
test_specification_dict = test_specification_instance.to_dict()
# create an instance of TestSpecification from a dict
test_specification_from_dict = TestSpecification.from_dict(test_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


