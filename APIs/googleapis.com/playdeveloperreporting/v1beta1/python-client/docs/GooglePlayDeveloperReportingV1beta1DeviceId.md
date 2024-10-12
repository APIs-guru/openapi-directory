# GooglePlayDeveloperReportingV1beta1DeviceId

Identifier of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_brand** | **str** | Value of Build.BRAND. | [optional] 
**build_device** | **str** | Value of Build.DEVICE. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_device_id import GooglePlayDeveloperReportingV1beta1DeviceId

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1DeviceId from a JSON string
google_play_developer_reporting_v1beta1_device_id_instance = GooglePlayDeveloperReportingV1beta1DeviceId.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1DeviceId.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_device_id_dict = google_play_developer_reporting_v1beta1_device_id_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1DeviceId from a dict
google_play_developer_reporting_v1beta1_device_id_from_dict = GooglePlayDeveloperReportingV1beta1DeviceId.from_dict(google_play_developer_reporting_v1beta1_device_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


