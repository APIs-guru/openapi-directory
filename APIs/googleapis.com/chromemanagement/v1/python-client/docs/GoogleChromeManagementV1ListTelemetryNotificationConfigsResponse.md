# GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse

Response message for listing notification configs for a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**telemetry_notification_configs** | [**List[GoogleChromeManagementV1TelemetryNotificationConfig]**](GoogleChromeManagementV1TelemetryNotificationConfig.md) | The telemetry notification configs from the specified customer. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_list_telemetry_notification_configs_response import GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse from a JSON string
google_chrome_management_v1_list_telemetry_notification_configs_response_instance = GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_list_telemetry_notification_configs_response_dict = google_chrome_management_v1_list_telemetry_notification_configs_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse from a dict
google_chrome_management_v1_list_telemetry_notification_configs_response_from_dict = GoogleChromeManagementV1ListTelemetryNotificationConfigsResponse.from_dict(google_chrome_management_v1_list_telemetry_notification_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


