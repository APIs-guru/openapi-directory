# AndroidInstrumentationTest

A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_package_id** | **str** | The java package for the test to be executed. Required | [optional] 
**test_runner_class** | **str** | The InstrumentationTestRunner class. Required | [optional] 
**test_targets** | **List[str]** | Each target must be fully qualified with the package name or class name, in one of these formats: - \&quot;package package_name\&quot; - \&quot;class package_name.class_name\&quot; - \&quot;class package_name.class_name#method_name\&quot; If empty, all targets in the module will be run. | [optional] 
**use_orchestrator** | **bool** | The flag indicates whether Android Test Orchestrator will be used to run test or not. | [optional] 

## Example

```python
from openapi_client.models.android_instrumentation_test import AndroidInstrumentationTest

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidInstrumentationTest from a JSON string
android_instrumentation_test_instance = AndroidInstrumentationTest.from_json(json)
# print the JSON string representation of the object
print(AndroidInstrumentationTest.to_json())

# convert the object into a dict
android_instrumentation_test_dict = android_instrumentation_test_instance.to_dict()
# create an instance of AndroidInstrumentationTest from a dict
android_instrumentation_test_from_dict = AndroidInstrumentationTest.from_dict(android_instrumentation_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


