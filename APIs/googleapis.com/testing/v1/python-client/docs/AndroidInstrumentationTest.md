# AndroidInstrumentationTest

A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_apk** | [**FileReference**](FileReference.md) |  | [optional] 
**app_bundle** | [**AppBundle**](AppBundle.md) |  | [optional] 
**app_package_id** | **str** | The java package for the application under test. The default value is determined by examining the application&#39;s manifest. | [optional] 
**orchestrator_option** | **str** | The option of whether running each test within its own invocation of instrumentation with Android Test Orchestrator or not. ** Orchestrator is only compatible with AndroidJUnitRunner version 1.1 or higher! ** Orchestrator offers the following benefits: - No shared state - Crashes are isolated - Logs are scoped per test See for more information about Android Test Orchestrator. If not set, the test will be run without the orchestrator. | [optional] 
**sharding_option** | [**ShardingOption**](ShardingOption.md) |  | [optional] 
**test_apk** | [**FileReference**](FileReference.md) |  | [optional] 
**test_package_id** | **str** | The java package for the test to be executed. The default value is determined by examining the application&#39;s manifest. | [optional] 
**test_runner_class** | **str** | The InstrumentationTestRunner class. The default value is determined by examining the application&#39;s manifest. | [optional] 
**test_targets** | **List[str]** | Each target must be fully qualified with the package name or class name, in one of these formats: - \&quot;package package_name\&quot; - \&quot;class package_name.class_name\&quot; - \&quot;class package_name.class_name#method_name\&quot; If empty, all targets in the module will be run. | [optional] 

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


