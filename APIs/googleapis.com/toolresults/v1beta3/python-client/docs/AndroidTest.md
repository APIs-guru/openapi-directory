# AndroidTest

An Android mobile test specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_app_info** | [**AndroidAppInfo**](AndroidAppInfo.md) |  | [optional] 
**android_instrumentation_test** | [**AndroidInstrumentationTest**](AndroidInstrumentationTest.md) |  | [optional] 
**android_robo_test** | [**AndroidRoboTest**](AndroidRoboTest.md) |  | [optional] 
**android_test_loop** | **object** | Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent. | [optional] 
**test_timeout** | [**Duration**](Duration.md) |  | [optional] 

## Example

```python
from openapi_client.models.android_test import AndroidTest

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidTest from a JSON string
android_test_instance = AndroidTest.from_json(json)
# print the JSON string representation of the object
print(AndroidTest.to_json())

# convert the object into a dict
android_test_dict = android_test_instance.to_dict()
# create an instance of AndroidTest from a dict
android_test_from_dict = AndroidTest.from_dict(android_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


