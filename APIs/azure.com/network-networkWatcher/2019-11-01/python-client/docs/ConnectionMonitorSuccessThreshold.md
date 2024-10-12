# ConnectionMonitorSuccessThreshold

Describes the threshold for declaring a test successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checks_failed_percent** | **int** | The maximum percentage of failed checks permitted for a test to evaluate as successful. | [optional] 
**round_trip_time_ms** | **int** | The maximum round-trip time in milliseconds permitted for a test to evaluate as successful. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_success_threshold import ConnectionMonitorSuccessThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorSuccessThreshold from a JSON string
connection_monitor_success_threshold_instance = ConnectionMonitorSuccessThreshold.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorSuccessThreshold.to_json())

# convert the object into a dict
connection_monitor_success_threshold_dict = connection_monitor_success_threshold_instance.to_dict()
# create an instance of ConnectionMonitorSuccessThreshold from a dict
connection_monitor_success_threshold_from_dict = ConnectionMonitorSuccessThreshold.from_dict(connection_monitor_success_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


