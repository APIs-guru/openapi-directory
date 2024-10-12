# TestRunStatistics

Summary single test run on Xamarin Test Cloud

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | **float** | Number of devices running the test | [optional] 
**devices_failed** | **float** | Number of failed devices | [optional] 
**devices_finished** | **float** | Number of finished devices | [optional] 
**failed** | **float** | Number of failed tests | [optional] 
**passed** | **float** | Number of passed tests | [optional] 
**peak_memory** | **float** | The max amount of MB used during the test run | [optional] 
**skipped** | **float** | Number of skipped tests | [optional] 
**total** | **float** | Number of tests in total | [optional] 
**total_device_minutes** | **float** | The number of minutes of device time the test has been runnign | [optional] 

## Example

```python
from openapi_client.models.test_run_statistics import TestRunStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of TestRunStatistics from a JSON string
test_run_statistics_instance = TestRunStatistics.from_json(json)
# print the JSON string representation of the object
print(TestRunStatistics.to_json())

# convert the object into a dict
test_run_statistics_dict = test_run_statistics_instance.to_dict()
# create an instance of TestRunStatistics from a dict
test_run_statistics_from_dict = TestRunStatistics.from_dict(test_run_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


