# GoogleChromeManagementV1ListTelemetryUsersResponse

Response message for listing telemetry users for a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to specify next page in the list. | [optional] 
**telemetry_users** | [**List[GoogleChromeManagementV1TelemetryUser]**](GoogleChromeManagementV1TelemetryUser.md) | Telemetry users returned in the response. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_list_telemetry_users_response import GoogleChromeManagementV1ListTelemetryUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ListTelemetryUsersResponse from a JSON string
google_chrome_management_v1_list_telemetry_users_response_instance = GoogleChromeManagementV1ListTelemetryUsersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ListTelemetryUsersResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_list_telemetry_users_response_dict = google_chrome_management_v1_list_telemetry_users_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1ListTelemetryUsersResponse from a dict
google_chrome_management_v1_list_telemetry_users_response_from_dict = GoogleChromeManagementV1ListTelemetryUsersResponse.from_dict(google_chrome_management_v1_list_telemetry_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


