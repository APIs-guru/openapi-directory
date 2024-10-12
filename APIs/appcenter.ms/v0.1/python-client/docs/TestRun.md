# TestRun

Summary single test run on Xamarin Test Cloud

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** | The compiled version of the app binary | [optional] 
**var_date** | **str** | The date and time the test was uploaded | [optional] 
**description** | **str** | Human readable explanation of the current test status | [optional] 
**id** | **str** | The unique id of the test upload | [optional] 
**platform** | **str** | The device platform targeted by the test. Possible values are &#39;ios&#39; or &#39;android&#39; | [optional] 
**result_status** | **str** | The passed/failed state | [optional] 
**run_status** | **str** | The current status of the test run, in relation to the various phases | [optional] 
**state** | **str** | Deprecated. Use runStatus instead. | [optional] 
**stats** | [**TestRunStatistics**](TestRunStatistics.md) |  | [optional] 
**status** | **str** | Deprecated. Use resultStatus instead. | [optional] 
**test_series** | **str** | The name of the test series with which this test upload is associated | [optional] 
**test_type** | **str** | The name of the test framework used to run this test | [optional] 

## Example

```python
from openapi_client.models.test_run import TestRun

# TODO update the JSON string below
json = "{}"
# create an instance of TestRun from a JSON string
test_run_instance = TestRun.from_json(json)
# print the JSON string representation of the object
print(TestRun.to_json())

# convert the object into a dict
test_run_dict = test_run_instance.to_dict()
# create an instance of TestRun from a dict
test_run_from_dict = TestRun.from_dict(test_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


