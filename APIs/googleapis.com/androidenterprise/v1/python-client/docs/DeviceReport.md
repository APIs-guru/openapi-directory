# DeviceReport

Device report updated with the latest app states for managed apps on the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_state** | [**List[AppState]**](AppState.md) | List of app states set by managed apps on the device. App states are defined by the app&#39;s developers. This field will always be present. | [optional] 
**last_updated_timestamp_millis** | **str** | The timestamp of the last report update in milliseconds since epoch. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.device_report import DeviceReport

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceReport from a JSON string
device_report_instance = DeviceReport.from_json(json)
# print the JSON string representation of the object
print(DeviceReport.to_json())

# convert the object into a dict
device_report_dict = device_report_instance.to_dict()
# create an instance of DeviceReport from a dict
device_report_from_dict = DeviceReport.from_dict(device_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


