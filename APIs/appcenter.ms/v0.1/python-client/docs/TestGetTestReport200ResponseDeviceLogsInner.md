# TestGetTestReport200ResponseDeviceLogsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appium_log** | **str** |  | [optional] 
**device_log** | **str** |  | [optional] 
**device_snapshot_id** | **str** |  | [optional] 
**test_log** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_get_test_report200_response_device_logs_inner import TestGetTestReport200ResponseDeviceLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestGetTestReport200ResponseDeviceLogsInner from a JSON string
test_get_test_report200_response_device_logs_inner_instance = TestGetTestReport200ResponseDeviceLogsInner.from_json(json)
# print the JSON string representation of the object
print(TestGetTestReport200ResponseDeviceLogsInner.to_json())

# convert the object into a dict
test_get_test_report200_response_device_logs_inner_dict = test_get_test_report200_response_device_logs_inner_instance.to_dict()
# create an instance of TestGetTestReport200ResponseDeviceLogsInner from a dict
test_get_test_report200_response_device_logs_inner_from_dict = TestGetTestReport200ResponseDeviceLogsInner.from_dict(test_get_test_report200_response_device_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


