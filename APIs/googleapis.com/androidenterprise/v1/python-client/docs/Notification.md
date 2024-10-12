# Notification

A notification of one event relating to an enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_restrictions_schema_change_event** | [**AppRestrictionsSchemaChangeEvent**](AppRestrictionsSchemaChangeEvent.md) |  | [optional] 
**app_update_event** | [**AppUpdateEvent**](AppUpdateEvent.md) |  | [optional] 
**device_report_update_event** | [**DeviceReportUpdateEvent**](DeviceReportUpdateEvent.md) |  | [optional] 
**enterprise_id** | **str** | The ID of the enterprise for which the notification is sent. This will always be present. | [optional] 
**install_failure_event** | [**InstallFailureEvent**](InstallFailureEvent.md) |  | [optional] 
**new_device_event** | [**NewDeviceEvent**](NewDeviceEvent.md) |  | [optional] 
**new_permissions_event** | [**NewPermissionsEvent**](NewPermissionsEvent.md) |  | [optional] 
**notification_type** | **str** | Type of the notification. | [optional] 
**product_approval_event** | [**ProductApprovalEvent**](ProductApprovalEvent.md) |  | [optional] 
**product_availability_change_event** | [**ProductAvailabilityChangeEvent**](ProductAvailabilityChangeEvent.md) |  | [optional] 
**timestamp_millis** | **str** | The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present. | [optional] 

## Example

```python
from openapi_client.models.notification import Notification

# TODO update the JSON string below
json = "{}"
# create an instance of Notification from a JSON string
notification_instance = Notification.from_json(json)
# print the JSON string representation of the object
print(Notification.to_json())

# convert the object into a dict
notification_dict = notification_instance.to_dict()
# create an instance of Notification from a dict
notification_from_dict = Notification.from_dict(notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


