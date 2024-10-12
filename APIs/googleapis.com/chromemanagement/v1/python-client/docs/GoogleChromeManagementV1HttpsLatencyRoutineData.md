# GoogleChromeManagementV1HttpsLatencyRoutineData

Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency** | **str** | Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY. | [optional] [readonly] 
**problem** | **str** | Output only. HTTPS latency routine problem if a problem occurred. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_https_latency_routine_data import GoogleChromeManagementV1HttpsLatencyRoutineData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1HttpsLatencyRoutineData from a JSON string
google_chrome_management_v1_https_latency_routine_data_instance = GoogleChromeManagementV1HttpsLatencyRoutineData.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1HttpsLatencyRoutineData.to_json())

# convert the object into a dict
google_chrome_management_v1_https_latency_routine_data_dict = google_chrome_management_v1_https_latency_routine_data_instance.to_dict()
# create an instance of GoogleChromeManagementV1HttpsLatencyRoutineData from a dict
google_chrome_management_v1_https_latency_routine_data_from_dict = GoogleChromeManagementV1HttpsLatencyRoutineData.from_dict(google_chrome_management_v1_https_latency_routine_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


