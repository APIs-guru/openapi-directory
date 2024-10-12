# GoogleChromeManagementV1ListTelemetryDevicesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[GoogleChromeManagementV1TelemetryDevice]**](GoogleChromeManagementV1TelemetryDevice.md) | Telemetry devices returned in the response. | [optional] 
**next_page_token** | **str** | Token to specify next page in the list. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_list_telemetry_devices_response import GoogleChromeManagementV1ListTelemetryDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ListTelemetryDevicesResponse from a JSON string
google_chrome_management_v1_list_telemetry_devices_response_instance = GoogleChromeManagementV1ListTelemetryDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ListTelemetryDevicesResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_list_telemetry_devices_response_dict = google_chrome_management_v1_list_telemetry_devices_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1ListTelemetryDevicesResponse from a dict
google_chrome_management_v1_list_telemetry_devices_response_from_dict = GoogleChromeManagementV1ListTelemetryDevicesResponse.from_dict(google_chrome_management_v1_list_telemetry_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


