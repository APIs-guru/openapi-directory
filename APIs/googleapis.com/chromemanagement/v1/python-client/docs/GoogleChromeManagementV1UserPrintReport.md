# GoogleChromeManagementV1UserPrintReport

Report for CountPrintJobsByUser, contains printing statistics for a user. Contains the number of printers, the number of devices used to initiate print jobs, and the number of print jobs initiated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_count** | **str** | Number of chrome devices that have been used to initiate print jobs by the user. | [optional] 
**job_count** | **str** | Number of print jobs initiated by the user. | [optional] 
**printer_count** | **str** | Number of printers used by the user. | [optional] 
**user_email** | **str** | The primary e-mail address of the user. | [optional] 
**user_id** | **str** | The unique Directory API ID of the user. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_user_print_report import GoogleChromeManagementV1UserPrintReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1UserPrintReport from a JSON string
google_chrome_management_v1_user_print_report_instance = GoogleChromeManagementV1UserPrintReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1UserPrintReport.to_json())

# convert the object into a dict
google_chrome_management_v1_user_print_report_dict = google_chrome_management_v1_user_print_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1UserPrintReport from a dict
google_chrome_management_v1_user_print_report_from_dict = GoogleChromeManagementV1UserPrintReport.from_dict(google_chrome_management_v1_user_print_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


