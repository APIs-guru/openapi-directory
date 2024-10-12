# DeviceReportUpdateEvent

An event generated when an updated device report is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The Android ID of the device. This field will always be present. | [optional] 
**report** | [**DeviceReport**](DeviceReport.md) |  | [optional] 
**user_id** | **str** | The ID of the user. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.device_report_update_event import DeviceReportUpdateEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceReportUpdateEvent from a JSON string
device_report_update_event_instance = DeviceReportUpdateEvent.from_json(json)
# print the JSON string representation of the object
print(DeviceReportUpdateEvent.to_json())

# convert the object into a dict
device_report_update_event_dict = device_report_update_event_instance.to_dict()
# create an instance of DeviceReportUpdateEvent from a dict
device_report_update_event_from_dict = DeviceReportUpdateEvent.from_dict(device_report_update_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


