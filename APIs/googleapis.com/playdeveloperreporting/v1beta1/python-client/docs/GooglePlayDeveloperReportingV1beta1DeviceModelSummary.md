# GooglePlayDeveloperReportingV1beta1DeviceModelSummary

Summary of a device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | [**GooglePlayDeveloperReportingV1beta1DeviceId**](GooglePlayDeveloperReportingV1beta1DeviceId.md) |  | [optional] 
**device_uri** | **str** | Link to the device in Play Device Catalog. | [optional] 
**marketing_name** | **str** | Display name of the device. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_device_model_summary import GooglePlayDeveloperReportingV1beta1DeviceModelSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1DeviceModelSummary from a JSON string
google_play_developer_reporting_v1beta1_device_model_summary_instance = GooglePlayDeveloperReportingV1beta1DeviceModelSummary.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1DeviceModelSummary.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_device_model_summary_dict = google_play_developer_reporting_v1beta1_device_model_summary_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1DeviceModelSummary from a dict
google_play_developer_reporting_v1beta1_device_model_summary_from_dict = GooglePlayDeveloperReportingV1beta1DeviceModelSummary.from_dict(google_play_developer_reporting_v1beta1_device_model_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


