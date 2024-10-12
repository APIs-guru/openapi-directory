# SessionsPerDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_sessions_per_user** | **float** | Average seesion per user. | [optional] 
**previous_average_sessions_per_user** | **float** | Previous average session per user. | [optional] 
**previous_total_count** | **int** | Previous total count. | [optional] 
**sessions_per_user** | [**List[AnalyticsPerDeviceCounts200ResponseSessionsPerUserInner]**](AnalyticsPerDeviceCounts200ResponseSessionsPerUserInner.md) | The session count for each interval per device. | [optional] 
**total_count** | **int** | Total session per device count. | [optional] 

## Example

```python
from openapi_client.models.sessions_per_device import SessionsPerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of SessionsPerDevice from a JSON string
sessions_per_device_instance = SessionsPerDevice.from_json(json)
# print the JSON string representation of the object
print(SessionsPerDevice.to_json())

# convert the object into a dict
sessions_per_device_dict = sessions_per_device_instance.to_dict()
# create an instance of SessionsPerDevice from a dict
sessions_per_device_from_dict = SessionsPerDevice.from_dict(sessions_per_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


