# GoogleChromeManagementV1PrinterReport

Report for CountPrintJobsByPrinter, contains statistics on printer usage. Contains the total number of print jobs initiated with this printer, the number of users and the number of devices that have initiated at least one print job with this printer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_count** | **str** | Number of chrome devices that have been used to send print jobs to the specified printer. | [optional] 
**job_count** | **str** | Number of print jobs sent to the printer. | [optional] 
**printer** | **str** | Printer name. | [optional] 
**printer_id** | **str** | Printer API ID. | [optional] 
**printer_model** | **str** | Printer model. | [optional] 
**user_count** | **str** | Number of users that have sent print jobs to the printer. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_printer_report import GoogleChromeManagementV1PrinterReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1PrinterReport from a JSON string
google_chrome_management_v1_printer_report_instance = GoogleChromeManagementV1PrinterReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1PrinterReport.to_json())

# convert the object into a dict
google_chrome_management_v1_printer_report_dict = google_chrome_management_v1_printer_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1PrinterReport from a dict
google_chrome_management_v1_printer_report_from_dict = GoogleChromeManagementV1PrinterReport.from_dict(google_chrome_management_v1_printer_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


