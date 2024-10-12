# MonitorConfigExpectedStatusCodeRangesInner

Min and max value of a status code range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **int** | Max status code. | [optional] 
**min** | **int** | Min status code. | [optional] 

## Example

```python
from openapi_client.models.monitor_config_expected_status_code_ranges_inner import MonitorConfigExpectedStatusCodeRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorConfigExpectedStatusCodeRangesInner from a JSON string
monitor_config_expected_status_code_ranges_inner_instance = MonitorConfigExpectedStatusCodeRangesInner.from_json(json)
# print the JSON string representation of the object
print(MonitorConfigExpectedStatusCodeRangesInner.to_json())

# convert the object into a dict
monitor_config_expected_status_code_ranges_inner_dict = monitor_config_expected_status_code_ranges_inner_instance.to_dict()
# create an instance of MonitorConfigExpectedStatusCodeRangesInner from a dict
monitor_config_expected_status_code_ranges_inner_from_dict = MonitorConfigExpectedStatusCodeRangesInner.from_dict(monitor_config_expected_status_code_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


