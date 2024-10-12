# RecentDeviceActivity

Recent device activity can help developers identify devices that have exhibited hyperactive attestation activity, which could be a sign of an attack or token farming.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_activity_level** | **str** | Required. Indicates the activity level of the device. | [optional] 

## Example

```python
from openapi_client.models.recent_device_activity import RecentDeviceActivity

# TODO update the JSON string below
json = "{}"
# create an instance of RecentDeviceActivity from a JSON string
recent_device_activity_instance = RecentDeviceActivity.from_json(json)
# print the JSON string representation of the object
print(RecentDeviceActivity.to_json())

# convert the object into a dict
recent_device_activity_dict = recent_device_activity_instance.to_dict()
# create an instance of RecentDeviceActivity from a dict
recent_device_activity_from_dict = RecentDeviceActivity.from_dict(recent_device_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


