# GoogleChromeManagementV1ListTelemetryEventsResponse

Response message for listing telemetry events for a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to specify next page in the list. | [optional] 
**telemetry_events** | [**List[GoogleChromeManagementV1TelemetryEvent]**](GoogleChromeManagementV1TelemetryEvent.md) | Telemetry events returned in the response. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_list_telemetry_events_response import GoogleChromeManagementV1ListTelemetryEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ListTelemetryEventsResponse from a JSON string
google_chrome_management_v1_list_telemetry_events_response_instance = GoogleChromeManagementV1ListTelemetryEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ListTelemetryEventsResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_list_telemetry_events_response_dict = google_chrome_management_v1_list_telemetry_events_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1ListTelemetryEventsResponse from a dict
google_chrome_management_v1_list_telemetry_events_response_from_dict = GoogleChromeManagementV1ListTelemetryEventsResponse.from_dict(google_chrome_management_v1_list_telemetry_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


