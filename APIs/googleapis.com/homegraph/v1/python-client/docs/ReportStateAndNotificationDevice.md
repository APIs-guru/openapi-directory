# ReportStateAndNotificationDevice

The states and notifications specific to a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifications** | **Dict[str, object]** | Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). | [optional] 
**states** | **Dict[str, object]** | States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). | [optional] 

## Example

```python
from openapi_client.models.report_state_and_notification_device import ReportStateAndNotificationDevice

# TODO update the JSON string below
json = "{}"
# create an instance of ReportStateAndNotificationDevice from a JSON string
report_state_and_notification_device_instance = ReportStateAndNotificationDevice.from_json(json)
# print the JSON string representation of the object
print(ReportStateAndNotificationDevice.to_json())

# convert the object into a dict
report_state_and_notification_device_dict = report_state_and_notification_device_instance.to_dict()
# create an instance of ReportStateAndNotificationDevice from a dict
report_state_and_notification_device_from_dict = ReportStateAndNotificationDevice.from_dict(report_state_and_notification_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


